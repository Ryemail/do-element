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
		<!-- <div class="module" style="margin: 20px 0">
			<el-table :data="tableData" border>
				<el-table-column fixed prop="date" label="日期" width="100">
				</el-table-column>
				<el-table-column prop="name" label="姓名"> </el-table-column>
				<el-table-column prop="province" label="省份">
				</el-table-column>
				<el-table-column prop="city" label="市区" width="120">
				</el-table-column>
				<el-table-column prop="address" label="地址" width="300">
				</el-table-column>
				<el-table-column prop="zip" label="邮编"> </el-table-column>
				<el-table-column fixed="right" label="操作" min-width="120">
					<template>
						<el-button type="text" size="small">查看</el-button>
						<el-button type="text" size="small">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div> -->

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
import { clone } from '../../src/utils';

export default {
	data() {
		return {
			page: 2,
			table1: [],
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
				{ prop: 'name', label: '姓名', edit: true },
				{ prop: 'address', label: '地址' },
				{ prop: 'date', label: '时间' },
				{
					prop: 'zip',
					label: '邮编',
					fixed: 'right',
				},
			],
			columns2: [
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
					type: 'slot',
					prop: 'zip',
					label: '邮编',
					width: 200,
					fixed: 'right',
				},
			],
		};
	},
	mounted() {
		this.table1 = [...clone(this.tableData1), ...clone(this.tableData1)];
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
		onBaidu() {
			location.replace('https://fanyi.baidu.com/#en/zh/');
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
