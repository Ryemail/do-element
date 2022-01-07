---
pageClass: page-content
lang: zh-CN
---

## FilterColumn

主要是为了配合 Table 组件进行自定义显示列的配置，在 Table 组件传递 column-filter-click 时会显示自定义列图标，也可单独使用

### 基本使用

::: demo

```html
<template>
	<el-button @click="visible=true">Filter-Column</el-button>
	<d-filter-column
		:visible.sync="visible"
		:data="filterColumn"
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
			};
		},
		methods: {
			onConfirm(value) {
				console.log(value);
			},
			onCancel() {
				alert('点击了取消');
			},
		},
	};
</script>
```

:::

### Attributes

| 参数    | 说明                                 | 类型    | 可选值 | 默认值 |
| :------ | :----------------------------------- | :------ | ------ | ------ |
| visible | 必选参数                             | boolean | \_     | \_     |
| data    | 需要进行排序处理的数据，字段详见一下 | Array   | \_     | \_     |

### Data Key

| 参数     | 说明         | 类型    |
| :------- | :----------- | :------ |
| prop     | 属性名称     | string  |
| label    | 展示文字     | string  |
| checked  | 是否选中     | boolean |
| disabled | 是否禁止选择 | boolean |
| sort     | 是否参与排序 | boolean |

### Event

| name    | 说明     | 回调参数               |
| :------ | :------- | ---------------------- |
| confirm | 确定事件 | 处理完成后的 data 数组 |
| cancel  | 取消事件 | \_                     |
