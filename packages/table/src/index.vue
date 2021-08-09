<template>
	<div class="d-table">
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
							<cell-render
								v-if="item.render"
								:index="$index"
								:row="row"
								:render="item.render"
							/>
							<template v-else>
								{{ parseKeys(row, item.prop) || cellEmpty }}
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
		<div v-else-if="type === 'grid'" class="d-grid-table-wrapper">
			<table class="d-grid-table">
				<tr v-for="(item, key) in numbers" :key="key">
					<td
						class="d-grid-td"
						v-for="(value, index) in structure(item[0], item[1])"
						:key="index"
					>
						<slot :data="value" :row="key" :col="index"></slot>
					</td>
				</tr>
			</table>
		</div>
		<!-- 页脚 -->
		<div class="d-pagination">
			<el-pagination
				hide-on-sinde-page
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
import { getTableData } from './ajax';
import { parseKeys } from '@/utils';

export default {
	name: 'DTable',
	components: {
		cellRender: {
			functional: true,
			props: {
				index: Number,
				row: Object,
				render: Function,
			},
			render(h, ctx) {
				const { index, row, render } = ctx.props;
				return render(h, { index, row });
			},
		},
	},
	props: {
		type: { type: String, default: 'table' },

		data: { type: Array, default: () => [] },

		col: { type: Number, default: 6 },

		columns: { type: Array, default: () => [] },

		url: { type: String, default: '' },

		query: { type: Object, default: () => {} },

		headers: { type: Object, default: () => ({}) },

		method: { type: String, default: 'get' },

		page: { type: Number, default: 1 },

		limit: { type: Number, default: 10 },

		total: { type: Number, default: 0 },

		keys: {
			type: Object,
			default: () => {
				return {
					data: 'data.data',
					total: 'data.total',
					code: 'code',
				};
			},
		},
		cellEmpty: { type: String, default: '-' },

		headerRowClassName: { type: String, default: 'd-table-header' },

		border: { type: Boolean, default: true },
	},
	data() {
		return {
			tableQuery: { page: this.page, limit: this.limit },
			tableArray: [],
			tableTotal: this.total,
			loading: false,
			columnType: ['selection', 'index', 'expand'],
			responseData: null,
		};
	},
	computed: {
		tableData() {
			const { data, tableArray, page, limit, url } = this;
			const start = limit * (page - 1);

			if (url) return [...data, ...tableArray];

			return data.slice(start, start + limit);
		},
		numbers() {
			const { tableData, col } = this;
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
	methods: {
		parseKeys,
		async fetchTable() {
			this.loading = true;

			try {
				const { url, headers, method, tableQuery } = this;

				const response = await getTableData({
					url,
					data: tableQuery,
					headers,
					method,
				});

				const {
					code = 'code',
					data = 'data.data',
					total = 'data.total',
				} = this.keys;

				this.responseData = response;

				if (parseKeys(response, code) === 200) {
					this.tableArray = this.modifyData(
						parseKeys(response, data)
					);
					this.tableTotal = parseKeys(response, total) || 0;
				}

				this.loading = false;
			} catch (error) {
				console.log(error);
				this.loading = false;
			}
		},
		modifyData(data) {
			if (!data) return [];

			if (data instanceof Object) {
				const result = [];
				for (let key in data) {
					result.push(data[key]);
				}
				return result;
			}
			return data;
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
