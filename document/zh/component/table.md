---
pageClass: page-content
lang: zh-CN
---

## Table

### 基本使用

::: demo

```html
<template>
	<d-table
		:data="table"
		:columns="columns"
		:column-filter-click="onFilterClick"
	/>
	<d-filter-column
		:data="filterColumn"
		:visible.sync="visible"
		@confirm="onConfirm"
		@cancel="onCancel"
	/>
</template>

<script>
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
		methods: {
			onFilterClick() {
				//
				this.visible = true;
			},
			onConfirm(value) {
				console.log(value);
			},
			onCancel() {
				console.log('点击了取消');
			},
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

### 操作栏按钮超出显示点

::: demo

```html
<template>
	<d-table :columns="columns" url="/do-element/json/data.json">
		<template #operate="{ row }">
			<d-link>删除</d-link>
			<d-link>新增</d-link>
			<d-link>编辑</d-link>
		</template>
	</d-table>
</template>

<script>
	export default {
		data() {
			return {
				columns: [
					{ prop: 'name', label: '姓名' },
					{ prop: 'address', label: '地址' },
					{ prop: 'date', label: '时间' },
					{ prop: 'zip', label: '邮编' },
					{
						type: 'operate',
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
			<div>姓名：{{ data }}</div>
			<!-- <div>地址：{{ data.address }}</div> -->
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

| 参数                 | 说明                                                                                                   | 类型     | 可选值                                            | 默认值                                     |
| :------------------- | :----------------------------------------------------------------------------------------------------- | :------- | ------------------------------------------------- | ------------------------------------------ |
| type                 | 表格类型                                                                                               | string   | table/grid                                        | table                                      |
| url                  | 数据请求地址                                                                                           | string   | \_                                                | \_                                         |
| data                 | 表格数据                                                                                               | array    | \_                                                | \_                                         |
| columns              | 定义表格列                                                                                             | object[] | \_                                                | \_                                         |
| col                  | 指定一行显示的单元格数，仅在 type=grid 有效                                                            | number   | \_                                                | 6                                          |
| query                | 表格查询添加，仅在 url 存在时有效                                                                      | string   | \_                                                | \_                                         |
| headers              | 发起请求时的 headers, 仅在 url 存在时有效                                                              | object   | \_                                                | \_                                         |
| method               | 发起请求的方法，仅在 url 存在时有效                                                                    | string   | get/post                                          | get                                        |
| page                 | 当前页数，支持 .sync 修饰符                                                                            | number   | \_                                                | 1                                          |
| limit                | 每页显示条目个数，支持 .sync 修饰符                                                                    | numner   | \_                                                | 10                                         |
| total                | 数据总条数，用于计算分页，不存在时取数据长度计算                                                       | number   | \_                                                | 0                                          |
| keys                 | 异步数据的 key                                                                                         | object   | \_                                                | {data: 'data',total: 'total',code: 'code'} |
| cellEmpty            | 单元格数据为空时的填充                                                                                 | string   | \_                                                | -                                          |
| header-row-className | 表格头部类名                                                                                           | string   | \_                                                |                                            |
| border               | 是否需要表格边框                                                                                       | boolean  | true/false                                        | true                                       |
| query-change-run     | 是否在 query 变化时自动执行请求 ,false 下参数变化需要主动触发请求                                      | boolean  | true/false                                        | false                                      |
| drag                 | 是否开启行拖拽                                                                                         | boolean  | true/false                                        | false                                      |
| layout               | 组件布局，子组件名用逗号分隔                                                                           | string   | sizes, prev, pager, next, jumper, ->, total, slot | total, sizes, prev, pager, next, jumper    |
| more-count           | 操作按钮超出 n 个显示点                                                                                | number   | \_                                                | 3                                          |
| column-filter-click  | 自定义显示列的回调函数，决定了是否显示自定义 列 icon                                                   | function | \_                                                | \_                                         |
| pagination           | [element-ui pagination](https://element.eleme.cn/#/zh-CN/component/pagination#attributes) 分页组件属性 | Object   | \_                                                | {}                                         |
| 其他参数             | 同 element-ui 的 table 参数                                                                            | \_       | \_                                                | \_                                         |

### Columns Keys

| 属性                | 说明                                                                                                                             | 类型                        | 可选值                              |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------- | :-------------------------- | :---------------------------------- |
| prop                | 对应列内容的字段名                                                                                                               | string                      | \_                                  |
| type                | 对应列的类型。 selection 则显示多选框；index 则显示该行的索引； expand 显示可展开的按钮；slot 则表示插槽列；operate 则表示操作栏 | string                      | selection/index/expand/slot/operate |
| align               | 对齐方式                                                                                                                         | string                      | left/center/right                   |
| label               | 显示的标题                                                                                                                       | string                      | \_                                  |
| minWidth            | 对应列的最小宽度                                                                                                                 | number                      | \_                                  |
| width               | 对应列的宽度                                                                                                                     | number                      | \_                                  |
| fixed               | 列是否固定在左侧或者右侧，true 表示固定在左侧                                                                                    | string, boolean             | true, left, right                   |
| render              | 单元格区域渲染使用的 Function                                                                                                    | Function(h, { row, index }) | \_                                  |
| edit                | 当前单元格是否可编辑                                                                                                             | boolean                     | false/true                          |
| showOverflowTooltip | 超出单元格宽度显示省略,默认 true                                                                                                 | boolean                     | false/true                          |

### Events

| 事件名称    | 说明                                              | 参数                      |
| :---------- | :------------------------------------------------ | :------------------------ |
| on-response | 在接口调用后执行，返回接口数据，仅在 url 存在有效 | response                  |
| on-darg     | 当某行拖拽时触发                                  | dragIndex, dropIndex, row |
| 其他事件    | 同 element-ui 的 table 组件 事件                  | \_                        |

### Methods

| 方法名称 | 说明     | 参数(page)                              |
| :------- | :------- | :-------------------------------------- |
| reload   | 重置表格 | 存在则重置到指定 page，否则重置到当前页 |
