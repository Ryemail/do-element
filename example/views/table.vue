<template>
	<div>
		<div class="module">
			<h3 class="module-title">基础表格</h3>
			<d-table
				:data="table1"
				:columns="columns"
				@cell-edit="onCellEdit"
				drag
			>
			</d-table>
		</div>
		<div class="module">
			<h3 class="module-title">动态数据</h3>
			<d-table
				url="/api/tableList"
				:keys="{ data: 'data.data', total: 'data.total' }"
				:columns="columns2"
				:page.sync="page"
				ref="table"
				drag
			>
				<!-- 使用插槽 -->
				<template #zip="{ row }">
					{{ row.status }}
				</template>
			</d-table>
		</div>

		<el-button @click="onReload">Reload</el-button>
		<div class="module">
			<h3 class="module-title">Grid 列表</h3>

			<d-table
				type="grid"
				:col="3"
				url="/api/tableList"
				:keys="{ data: 'data.data' }"
				:columns="columns"
			>
				<template #default="{ data }">
					{{ data }}
				</template>
			</d-table>
		</div>
	</div>
</template>

<script>
// import { clone } from '../../src/utils';

export default {
	data() {
		return {
			page: 2,
			table1: [],
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
				{ prop: 'name', label: '姓名', width: 100, edit: true },
				{
					prop: 'address',
					label: '地址',
					edit: true,
				},
				{ prop: 'date', label: '时间' },
				{ prop: 'zip', label: '邮编' },
			],
			columns2: [
				{ prop: 'name', label: '姓名', width: 100 },
				{ prop: 'address', label: '地址', showOverflowTooltip: false },
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
				{ type: 'slot', prop: 'zip', label: '邮编(插槽使用)' }, // 插槽使用
			],
		};
	},
	mounted() {
		// this.table1 = [...clone(this.tableData1), ...clone(this.tableData1)];
	},
	methods: {
		onClick() {
			alert('点击事件');
		},
		onReload() {
			this.$refs.table.reload();
		},
		onCellEdit({ rowIndex, columnIndex, row }) {
			console.log(rowIndex, columnIndex, row);
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
