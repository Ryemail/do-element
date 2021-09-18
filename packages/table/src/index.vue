<template>
	<div class="d-table">
		<!-- 表格布局 -->
		<el-table
			v-if="type === 'table'"
			v-loading="loading"
			:data="tableArray"
			style="width: 100%"
			:header-row-class-name="headerRowClassName"
			:border="border"
			v-on="$listeners"
			v-bind="$attrs"
			@cell-click="onCellClick"
			ref="table"
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
					:show-overflow-tooltip="onTooltip(item)"
				>
					<template slot-scope="{ $index, row, column }">
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
							<template v-if="item.edit">
								<el-input
									class="d-cell-input"
									v-if="
										$index === point.x &&
										getColumnIndex(column.id) === point.y
									"
									v-model="row[item.prop]"
								/>
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
						:class="[value && 'd-grid-td']"
						v-for="(value, index) in structure(item[0], item[1])"
						:key="index"
					>
						<div
							v-if="value && selection"
							class="d-td-selection"
						></div>
						<slot
							v-if="value"
							:data="value"
							:row="key"
							:col="index"
						/>
					</td>
				</tr>
			</table>
		</div>
		<!-- 页脚 -->
		<div class="d-pagination">
			<el-pagination
				hide-on-sinde-page
				@size-change="onPageChange"
				@current-change="onPageChange"
				:current-page="tableQuery.page"
				:total="tableTotal || data.length"
				:layout="layout"
			>
			</el-pagination>
		</div>
	</div>
</template>

<script>
import { getTable } from './ajax';
import { parseKeys, clone } from '@/utils';
import { onCreateDrop, on, getTarget } from './drag';

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

		selection: { type: Boolean, default: true },

		keys: {
			type: Object,
			default: () => {
				return {
					data: 'data',
					total: 'total',
					code: 'code',
				};
			},
		},
		cellEmpty: { type: String, default: '-' },

		headerRowClassName: { type: String, default: 'd-table-header' },

		border: { type: Boolean, default: true },

		queryChangeRun: { type: Boolean, default: false },

		drag: { type: Boolean, default: false },

		layout: {
			type: String,
			default: 'total, prev, pager, next, jumper',
		},
	},
	data() {
		return {
			tableQuery: { page: this.page, limit: this.limit },
			tableArray: [],
			tableTotal: this.total,
			loading: false,
			columnType: ['selection', 'index', 'expand'],
			responseData: null,
			point: {
				x: -1,
				y: -1,
			},
		};
	},
	computed: {
		numbers() {
			const { tableArray, col } = this;
			const length = Math.ceil(tableArray.length / col),
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
				if (this.url && this.queryChangeRun) this.reload();
			},
			deep: true,
			immediate: true,
		},
		limit(val) {
			this.tableQuery.limit = val;
		},
		page(val) {
			this.tableQuery.page = val;
		},
		data: {
			immediate: true,
			handler(data) {
				const { page, limit } = this;

				const start = limit * (page - 1);

				this.tableArray = data.slice(start, start + limit);
			},
		},
	},
	created() {
		if (!this.queryChangeRun && this.url) {
			this.reload();
		}
	},
	mounted() {
		this.drag && this.onDrag();
	},
	methods: {
		parseKeys,

		onTooltip(item) {
			if (item.showOverflowTooltip) return item.showOverflowTooltip;

			return true;
		},

		getColumnIndex(id) {
			return Number(id.split('_').pop()) - 1;
		},

		// 请求表格数据
		async reload(page) {
			this.loading = true;

			// page 存在,则重置当到指定页面,负责充值到当前页
			if (page) {
				this.onPageChange(page);
			}

			try {
				const { url, headers, method, tableQuery } = this;

				const response = await getTable({
					url,
					data: tableQuery,
					headers,
					method,
				});

				const {
					code = 'code',
					data = 'data',
					total = 'total',
				} = this.keys;

				this.responseData = response;

				if (parseKeys(response, code) === 200) {
					this.tableArray = this.modifyData(
						parseKeys(response, data)
					);

					this.tableTotal = parseKeys(response, total) || 0;
				}

				this.$emit('on-response', this.responseData);

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
		onPageChange(page) {
			this.tableQuery.page = page;

			this.onStructureData();

			this.$emit('update:page', page);
		},

		onStructureData() {
			// 静态数据下进行分页
			if (!this.url) {
				const { limit, page } = this.tableQuery;
				const start = limit * (page - 1);
				this.tableArray = this.data.slice(start, start + limit);
			} else {
				// 动态数据下请求接口
				this.reload();
			}
		},

		structure(startIndex, endIndex) {
			const rows = this.tableArray.slice(startIndex, endIndex);
			if (rows.length < this.col) {
				return [
					...rows,
					...new Array(this.col - rows.length).fill(null),
				];
			}
			return rows;
		},

		onCellClick(row, column, cell, event) {
			const property = this.columns.find(
				(item) => item.prop === column.property
			);

			const { rowIndex } = getTarget(event.target);

			const columnIndex = cell.cellIndex;

			this.$emit('cell-click', { row, column, cell, event });

			if (!property) return;

			if (property.edit !== true) return;

			this.point.x = rowIndex;
			this.point.y = columnIndex;

			this.$nextTick(() => {
				const input = cell.querySelector('input');

				if (input) {
					input.focus();

					on(input, 'blur', () => {
						this.point = { x: -1, y: -1 };

						this.$emit('cell-edit', { rowIndex, columnIndex, row });
					});
				}
			});
		},

		onDrag() {
			if (this.$refs.table === undefined) return;

			const selector = this.$refs.table.$el;

			const tbody = selector.querySelector('.el-table__body tbody');

			onCreateDrop(tbody, (dragIndex, dropIndex) => {
				const data = clone(this.tableArray);

				const drag = data[dragIndex];

				if (dropIndex < dragIndex) {
					data.splice(dropIndex, 0, drag);
					data.splice(dragIndex + 1, 1);
				} else {
					data.splice(dropIndex + 1, 0, drag);
					data.splice(dragIndex, 1);
				}

				this.tableArray = data;

				this.$emit('on-drag', dragIndex, dropIndex, data);

				console.log(data);
			});
		},
	},
};
</script>
