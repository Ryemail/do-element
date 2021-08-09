<template>
	<div>
		<div class="module">
			<h3 class="module-title">基础表格</h3>
			<gl-table :data="table1" :columns="columns"></gl-table>
		</div>
		<div class="module">
			<h3 class="module-title">动态数据</h3>
			<gl-table url="/api/tableList" :columns="columns2">
				<!-- 使用插槽 -->
				<template #zip="{ row }">
					{{ row.status }}
				</template>
			</gl-table>
		</div>
		<div class="module">
			<h3 class="module-title">Grid 列表</h3>

			<gl-table
				type="grid"
				:col="3"
				url="/api/tableList"
				:columns="columns"
			>
				<template #default="{ data }">
					{{ data }}
				</template>
			</gl-table>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			table1: [
				{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
				},
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
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
				},
				{
					date: '2016-05-08',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
				},
				{
					date: '2016-05-06',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
				},
				{
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
				},
			],
			columns: [
				{ prop: 'name', label: '姓名', width: 100 },
				{ prop: 'address', label: '地址' },
				{ prop: 'date', label: '时间' },
				{ prop: 'zip', label: '邮编' },
			],
			columns2: [
				{ prop: 'name', label: '姓名', width: 100 },
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
				{ type: 'slot', prop: 'zip', label: '邮编(插槽使用)' }, // 插槽使用
			],
		};
	},
	methods: {
		onClick() {
			alert('点击事件');
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
