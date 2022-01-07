<template>
	<div>
		<div class="module">
			<h3 class="module-title">基础表格</h3>
			<!-- <d-table
				:data="table1"
				:columns="columns"
				:page.sync="page"
				:total="total"
				@cell-edit="onCellEdit"
			>
			</d-table> -->
		</div>

		<div class="module">
			<h3 class="module-title">动态数据</h3>
			<d-table
				url="/api/tableList"
				:keys="{ data: 'data.data', total: 'data.total' }"
				:columns="columns2"
				:limit.sync="limit"
				ref="table"
				:column-filter-click="onFilterClick"
			>
				<!-- 使用插槽 -->
				<!-- <template #zip="{ row }">
					{{ row.status }}
				</template> -->

				<template #operate="{ row }">
					<d-link @click="onDelete(row)">删除</d-link>
					<d-link @click="onDelete(row)">修改</d-link>
					<d-link @click="onDelete(row)">审批</d-link>
				</template>
			</d-table>

			<!-- 自定义列 -->
			<d-filter-column
				:data="filterColumn"
				:visible.sync="visible"
				@confirm="onFilterEvent"
			/>
		</div>

		<el-button @click="onReload">Reload</el-button>
		<div class="module">
			<h3 class="module-title">Grid 列表</h3>
			<!-- <d-table
				type="grid"
				:col="3"
				url="/api/tableList"
				:keys="{ data: 'data.data' }"
				:columns="columns"
			>
				<template #default="{ data }">
					{{ data }}
				</template>
			</d-table> -->
		</div>
	</div>
</template>

<script>
// import { clone } from '../../src/utils';
import axios from 'axios';

export default {
	data() {
		return {
			visible: false,
			filterColumn: [
				{
					label: '姓名',
					prop: 'name',
					checked: true,
					disabled: true,
					sort: false,
				},

				{
					label: '时间',
					prop: 'date',
					checked: true,
					disabled: false,
					sort: true,
				},
				{
					label: '地址',
					prop: 'name',
					checked: true,
					disabled: true,
					sort: false,
				},
				{
					label: '部门',
					prop: 'deparment',
					checked: true,
					disabled: false,
					sort: true,
				},
				{
					label: '性别',
					prop: 'sex',
					checked: true,
					disabled: false,
					sort: true,
				},
			],
			tableData2: [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
				},
			],
			page: 1,
			limit: 10,
			table1: [],
			total: 0,
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1517 弄',
					zip: 200333,
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1519 弄',
					zip: 200333,
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1516 弄',
					zip: 200333,
				},
			],
			tableData1: [
				{
					id: 1,
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				},
				{
					id: 2,
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
				},
				{
					id: 3,
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					hasChildren: true,
				},
				{
					id: 4,
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
				},
			],
			columns: [
				{ prop: 'name', label: '姓名', edit: true, sortable: false },
				{ prop: 'address', label: '地址' },
				{ prop: 'date', label: '时间' },
				{ prop: 'zip', label: '邮编', fixed: 'right' },
			],
			columns2: [
				{ type: 'selection' },
				{ prop: 'name', label: '姓名', edit: true },
				{ prop: 'address', label: '地址' },
				{
					prop: 'date',
					label: '时间(render渲染)',
					render(h, { row }) {
						return h('div', {
							style: {
								color: 'red',
							},
							domProps: {
								innerHTML: row.date,
							},
						});
					},
				},
				{
					// type: 'slot',
					prop: 'status',
					label: '状态',
					width: 200,
					fixed: 'right',
				},
				{
					type: 'operate',
					prop: 'operate',
					renderHeader: (h) => {
						return h('span', '操作');
					}, // 自定义表头
					width: 160,
					fixed: 'right',
				},
			],
		};
	},
	mounted() {
		// this.table1 = [...clone(this.tableData1), ...clone(this.tableData1)];
	},
	created() {
		this.getTable();
	},
	watch: {
		page: {
			handler() {
				this.getTable();
			},
		},
		limit: {
			handler() {
				this.getTable();
			},
		},
	},
	methods: {
		async getTable() {
			const { data } = await axios.get('/api/tableList');

			this.table1 = [];
			this.total = data.data.total;
		},
		sizeChange(limit) {
			//
			console.log(limit);
		},
		onClick() {
			alert('点击事件');
		},
		onReload() {
			this.$refs.table.reload(4);
		},
		onCellEdit({ rowIndex, columnIndex, row }) {
			console.log(rowIndex, columnIndex, row);
		},
		onDelete(row) {
			console.log(row);
		},
		onFilterClick(cmd) {
			console.log(cmd);
			this.visible = true;
		},
		onFilterEvent(list) {
			console.log(list, 'dd');
		},
	},
};
</script>

<style lang="less" scoped>
.uplaod-content {
	> * {
		margin-bottom: 20px;
	}
}
</style>
