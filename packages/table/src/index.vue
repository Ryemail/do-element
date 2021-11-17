<template>
	<div class="d-table">
		<!-- 表格布局 -->
		<el-table
			v-if="type === 'table' && tableArray.length"
			:data="tableArray"
			ref="table"
			:header-row-class-name="headerRowClassName"
			:border="border"
			v-on="$listeners"
			v-bind="$attrs"
			@cell-click="onCellClick"
		>
			<template v-for="(item, key) in copyColumn">
				<!-- 数据列 -->
				<el-table-column
					v-if="!columnType.includes(item.type)"
					:key="key"
					:show-overflow-tooltip="onTooltip(item)"
					v-bind="item"
				>
					<template slot="header" slot-scope="{ column }">
						{{ column.label }}

						<template v-if="key + 1 === copyColumn.length">
							<el-popover
								placement="bottom-end"
								width="100"
								trigger="hover"
							>
								<svg
									slot="reference"
									viewBox="0 0 1024 1024"
									width="18"
									height="18"
									class="d-table-choose-icon"
								>
									<path
										fill="#cccccc"
										d="M589.960533 478.685867l132.437334-139.400534A43.144533 43.144533 0 1 1 785.066667 398.677333L664.439467 525.653333l11.8784-29.764266v442.094933a83.899733 83.899733 0 0 1-83.694934 83.626667 83.285333 83.285333 0 0 1-60.074666-25.531734L391.714133 850.602667a83.5584 83.5584 0 0 1-23.552-58.1632V516.164267L73.9328 232.2432a135.7824 135.7824 0 0 1-29.354667-148.343467A135.9872 135.9872 0 0 1 170.461867 0h676.4544c55.296 0 104.721067 33.041067 125.815466 84.104533a135.5776 135.5776 0 0 1-28.8768 147.524267l-59.8016 62.941867a43.144533 43.144533 0 1 1-62.600533-59.392c23.210667-24.576 23.210667-24.576 60.6208-63.761067a49.629867 49.629867 0 0 0-35.157333-85.060267h-676.522667a49.629867 49.629867 0 0 0-46.011733 30.72 49.152 49.152 0 0 0 10.171733 53.6576l320.170667 308.770134v311.773866l135.304533 140.014934v-452.608z"
									></path>
								</svg>

								<el-checkbox-group
									class="d-table-checkbox-group"
									@change="onLabelChange"
									v-model="showColumnChecked"
								>
									<el-checkbox
										v-for="item in copyColumn"
										:key="item.prop"
										:label="item.prop"
									>
										{{ item.label }}
									</el-checkbox>
								</el-checkbox-group>
							</el-popover>
						</template>
					</template>
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
				<el-table-column v-else :key="key" v-bind="item" />
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

		<d-table-empty v-if="tableArray.length <= 0">
			<template v-if="$scopedSlots.empty">
				<slot name="empty" />
			</template>
		</d-table-empty>

		<!-- 页脚 -->
		<div class="d-pagination" v-if="tableTotal || data.length">
			<el-pagination
				:hide-on-single-page="true"
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
import DTableEmpty from './empty.vue';

export default {
	name: 'DTable',
	components: {
		DTableEmpty,
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
			copyColumn: this.columns,
			showColumnChecked: this.columns.map((val) => val.prop),
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

		onLabelChange(labels) {
			console.log(labels);
			// labels.forEach((value) => {
			// 	//
			// });
		},

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

			// page 存在,则重置当到指定页面,负责重置到当前页
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
			this.$nextTick(() => {
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
				});
			});
		},
	},
};
</script>
