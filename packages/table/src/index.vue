<template>
	<div class="d-table">
		<!-- 表格布局 -->

		<el-popover
			v-if="tableArray.length"
			placement="bottom-end"
			class="dd"
			width="100"
			trigger="hover"
		>
			<svg
				slot="reference"
				viewBox="0 0 1024 1024"
				width="16"
				height="16"
				class="d-table-choose-icon"
			>
				<path
					d="M3.42898915 64.07163449H136.26026667v126.46991644H3.42898915v-126.46991644zM3.42898915 443.48720925H136.26026667v126.46991644H3.42898915v-126.46991644zM3.42898915 822.89695858H136.26026667v126.47574187H3.42898915v-126.47574187zM256.36882205 64.07163449H1015.19997155v126.46991644H256.36882205v-126.46991644zM256.36882205 443.48720925H1015.19997155v126.46991644H256.36882205v-126.46991644zM256.36882205 822.89695858H1015.19997155v126.47574187H256.36882205v-126.47574187z"
					fill="#000000"
				></path>
			</svg>

			<el-checkbox-group
				class="d-table-checkbox-group"
				v-model="showColumnChecked"
			>
				<el-checkbox
					v-for="item in labels"
					:key="item.prop"
					:label="item.prop"
				>
					{{ item.label }}
				</el-checkbox>
			</el-checkbox-group>
		</el-popover>

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
			<template v-for="(item, key) in filterColumns">
				<!-- 数据列 -->
				<el-table-column
					v-if="!columnType.includes(item.type)"
					:key="key"
					:show-overflow-tooltip="onTooltip(item)"
					v-bind="item"
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
			filterColumns: [],
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
		labels() {
			return this.columns.map((val) => ({
				label: val.label,
				prop: val.prop,
			}));
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
				this.tableArray = data;
			},
		},
		showColumnChecked: {
			handler(labels) {
				this.filterColumns = this.columns.filter((val) => {
					return labels.find((item) => item === val.prop);
				});
			},
			immediate: true,
			deep: true,
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
			// 静态数据
			if (!this.url) {
				this.tableArray = this.data;
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
