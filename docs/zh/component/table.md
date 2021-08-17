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
		methods: {
			onDialog() {
				this.visible = true;
			},
			onEvent(item) {
				if (item.prop === 'cancel') {
					alert('点击了取消');
				}

				if (item.prop === 'submit') {
					alert('点击了确定');
				}
			},
		},
	};
</script>
```

:::

### Attributes

| 参数     | 说明                         | 类型    | 默认值                                                                                                   |
| :------- | :--------------------------- | :------ | -------------------------------------------------------------------------------------------------------- |
| width    | dialog 宽度                  | string  | 600px                                                                                                    |
| round    | 是否圆角状态                 | boolean | true                                                                                                     |
| button   | 自定义的 footer 按钮         | array   | [{ type: 'default', prop: 'cancel', label: '取消' }, { type: 'primary', prop: 'submit', label: '确定' }] |
| 其他参数 | 同 element-ui 的 dialog 参数 | \_      | \_                                                                                                       |

### Slots

| name   | 说明                 |
| :----- | :------------------- |
| \_     | Dialog 的内容        |
| title  | Dialog 标题区的内容  |
| footer | Dialog footer 的内容 |

### Events

| 事件名称 | 说明                         | 参数               |
| :------- | :--------------------------- | :----------------- |
| event    | footer 按钮的点击回调        | 当前点击按钮的数据 |
| 其他事件 | 同 element-ui 的 dialog 事件 | \_                 |
