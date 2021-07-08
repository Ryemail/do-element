<template>
    <div class="do-table">
        <!-- 表格布局 -->
        <el-table
            v-if="type === 'table'"
            v-loading="loading"
            :data="tableData"
            style="width: 100%"
            :header-row-class-name="headerRowClassName"
            :border="border"
            v-on="$listeners"
            v-bind="$attrs"
        >
            <template v-for="(item, key) in columns">
                <!-- 数据列 -->
                <el-table-column
                    v-if="!columnType.includes(item.type)"
                    :key="key"
                    :type="item.type"
                    :fixed="item.fixed"
                    :align="item.align"
                    :prop="item.prop"
                    :label="item.label"
                    :min-width="item.minWidth"
                    :width="item.width"
                >
                    <template slot-scope="{ $index, row }">
                        <template v-if="item.type === 'slot'">
                            <slot
                                :name="item.prop"
                                :index="$index"
                                :row="row"
                            />
                        </template>
                        <template v-else>
                            <template v-if="item.html">
                                <div
                                    v-html="
                                        levelData(item.prop, row, cellEmpty)
                                    "
                                ></div>
                            </template>
                            <cell-render
                                v-else-if="item.render"
                                :index="$index"
                                :row="row"
                                :render="item.render"
                            />
                            <template v-else>
                                {{ levelData(item.prop, row, cellEmpty) }}
                            </template>
                        </template>
                    </template>
                </el-table-column>
                <!-- 索引 复选框列 -->
                <template v-else>
                    <el-table-column
                        :key="key"
                        :type="item.type"
                        :fixed="item.fixed"
                        :width="item.width"
                    />
                </template>
            </template>
        </el-table>
        <!-- 栅格布局 -->
        <div v-else-if="type === 'grid'" class="do-grid-table-wrapper">
            <table class="do-grid-table">
                <tr v-for="(item, key) in numbers" :key="key">
                    <td
                        class="do-grid-td"
                        v-for="(value, index) in structure(item[0], item[1])"
                        :key="index"
                    >
                        <slot :data="value" :row="key" :col="index"></slot>
                    </td>
                </tr>
            </table>
        </div>

        <div class="do-pagination">
            <div class="do-total">
                <slot name="total" :data="responseData"></slot>
            </div>
            <el-pagination
                hide-on-single-page
                @size-change="reload"
                @current-change="reload"
                :current-page="tableQuery.page"
                :total="tableTotal || tableData.length"
                layout="total, prev, pager, next, jumper"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { cellRender, levelData } from '@utils';
import axios from 'axios';

export default {
    name: 'DoTable',
    props: {
        type: {
            type: String,
            default: 'table',
        },
        data: {
            type: Array,
            default: () => [],
        },
        col: {
            type: Number,
            default: 6,
        },
        columns: {
            type: Array,
            default: () => [],
        },
        url: {
            type: String,
            default: '',
        },
        query: {
            type: Object,
            default: () => null,
        },
        page: {
            type: Number,
            default: 1,
        },
        limit: {
            type: Number,
            default: 10,
        },
        total: {
            type: Number,
            default: 0,
        },
        keys: {
            type: Object,
            default() {
                return { data: 'data', total: 'total', code: 'code' };
            },
        },
        cellEmpty: {
            type: String,
            default: '-',
        },
        headerRowClassName: {
            type: String,
            default: 'do-table-header',
        },
        border: {
            type: Boolean,
            default: true,
        },
        axiosConfig: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    components: { cellRender },

    data() {
        return {
            tableQuery: {
                page: this.page,
                limit: this.limit,
            },
            tableArray: [],
            tableTotal: this.total,
            loading: false,
            columnType: ['selection', 'index', 'expand'],
            responseData: null,
        };
    },
    watch: {
        query: {
            handler(value) {
                this.tableQuery = { ...value, ...this.tableQuery };
            },
            deep: true,
            immediate: true,
        },
        tableQuery: {
            handler() {
                if (this.url) this.fetchTable();
            },
            deep: true,
            immediate: true,
        },
    },
    computed: {
        isTableType({ type }) {
            return type === 'table';
        },
        tableData({ data, tableArray, page, limit, url }) {
            const start = limit * (page - 1);

            if (url) return [...data, ...tableArray];

            return data.slice(start, start + limit);
        },
        numbers({ tableData, col }) {
            const length = Math.ceil(tableData.length / col),
                numbers = [];

            let index = 0;

            for (let i = 0; i < length; i++) {
                index += i ? col : 0;
                numbers.push([index, index + col]);
            }

            return numbers;
        },
    },
    methods: {
        levelData,
        // 请求表格数据
        async fetchTable() {
            this.loading = true;

            try {
                const { url, axiosConfig } = this;

                const config = { url, ...axiosConfig };

                if (!axiosConfig.methods) {
                    config.params = this.tableQuery;
                } else {
                    config.data = this.tableQuery;
                }

                const data = await axios(config);

                const {
                    code = 'code',
                    data: dataKey = 'data',
                    total = 'total',
                } = this.keys;

                this.responseData = data;

                if (levelData(code, data, 0) === 200) {
                    this.tableArray = levelData(dataKey, data, []);
                    this.tableTotal = levelData(total, data, 0);
                }

                this.loading = false;
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        },
        // 分页
        reload(page) {
            this.tableQuery.page = page;
        },

        structure(startIndex, endIndex) {
            return this.tableData.slice(startIndex, endIndex);
        },
    },
};
</script>
