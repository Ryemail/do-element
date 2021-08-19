---
pageClass: page-content
lang: zh-CN
---

## Table

### 基本使用

::: demo

```html
<template>
	<d-table :data="table" :columns="columns"></d-table>
</template>

<script>
	export default {
		data() {
			return {
				table: [
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
			};
		},
	};
</script>
```

:::

### 插槽 与 render

::: demo

```html
<template>
	<d-table :columns="columns" url="/do-element/json/data.json">
		<template #operate="{ row }">
			<el-button size="mini">编辑</el-button>
			<el-button type="danger" size="mini">删除</el-button>
		</template>
	</d-table>
</template>

<script>
	export default {
		data() {
			return {
				columns: [
					{ prop: 'name', label: '姓名', width: 100 },
					{ prop: 'address', label: '地址' },
					{ prop: 'date', label: '时间' },
					{
						prop: 'zip',
						label: '邮编',
						render(h, { row, index }) {
							return h('span', {
								style: {
									color: 'red',
								},
								domProps: {
									innerHTML: row.zip,
								},
							});
						},
					},
					{
						type: 'slot',
						prop: 'operate',
						label: '操作',
						width: 180,
					}, // 插槽使用
				],
			};
		},
	};
</script>
```

:::

### Grid table

::: demo

```html
<template>
	<d-table type="grid" url="/do-element/json/data.json" :col="3">
		<template #default="{ data }">
			<div>姓名：{{ data.name }}</div>
			<div>地址：{{ data.address }}</div>
		</template>
	</d-table>
</template>

<script>
	export default {
		data() {
			return {
				columns: [
					{ prop: 'name', label: '姓名', width: 100 },
					{ prop: 'address', label: '地址' },
					{ prop: 'date', label: '时间' },
					{
						prop: 'zip',
						label: '邮编',
						render(h, { row, index }) {
							return h('span', {
								style: {
									color: 'red',
								},
								domProps: {
									innerHTML: row.zip,
								},
							});
						},
					},
					{
						type: 'slot',
						prop: 'operate',
						label: '操作',
						width: 180,
					}, // 插槽使用
				],
			};
		},
	};
</script>
```

:::

### Table Attributes

| 参数               | 说明                                             | 类型     | 可选值     | 默认值                                     |
| :----------------- | :----------------------------------------------- | :------- | ---------- | ------------------------------------------ |
| type               | 表格类型                                         | string   | table/grid | table                                      |
| url                | 数据请求地址                                     | string   | \_         | \_                                         |
| data               | 表格数据                                         | array    | \_         | \_                                         |
| columns            | 定义表格列                                       | object[] | \_         | \_                                         |
| col                | 指定一行显示的单元格数，仅在 type=grid 有效      | number   | \_         | 6                                          |
| query              | 表格查询添加，仅在 url 存在时有效                | string   | \_         | \_                                         |
| headers            | 发起请求时的 headers, 仅在 url 存在时有效        | object   | \_         | \_                                         |
| method             | 发起请求的方法，仅在 url 存在时有效              | string   | get/post   | get                                        |
| page               | 数据请求的页数 ，仅在 url 存在时有效             | number   | \_         | 1                                          |
| limit              | 数据每次请求的条数 ，仅在 url 存在时有效         | numner   | \_         | 10                                         |
| total              | 数据总条数，用于计算分页，不存在时取数据长度计算 | number   | \_         | 0                                          |
| keys               | 异步数据的 key                                   | object   | \_         | {data: 'data',total: 'total',code: 'code'} |
| cellEmpty          | 单元格数据为空时的填充                           | string   | \_         | -                                          |
| headerRowClassName | 表格头部类名                                     | string   | \_         |                                            |
| border             | 是否需要表格边框                                 | boolean  | true/false | true                                       |

| 其他参数 | 同 element-ui 的 dialog 参数 | \_ | \_ |

### Events

| 事件名称    | 说明                                              | 参数 |
| :---------- | :------------------------------------------------ | :--- |
| on-response | 在接口调用后执行，返回接口数据，仅在 url 存在有效 | \_   |
| 其他事件    | 同 element-ui 的 table 组件 事件                  | \_   |
