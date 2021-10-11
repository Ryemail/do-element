---
pageClass: page-content
lang: zh-CN
---

## Modal

:::danger
使用 modal 时请确保引入的 iconfont 库中有名称为 warning、error 的 icon

:::

::: demo

```html
<template>
	<div>
		<el-button @click="onModal">modal</el-button>
	</div>
</template>

<script>
	export default {
		methods: {
			onModal() {
				this.$modal({
					type: 'warning',
					title: '我是dialog的标题',
					message: '我是提示的内容',
				})
					.then(() => {
						console.log('确定');
					})
					.catch(() => {
						console.log('取消');
					});
			},
		},
	};
</script>
```

:::

## Notice

::: demo

```html
<template>
	<div>
		<el-button @click="onNotice">notice</el-button>
		<el-button @click="onNoticeCode">使用code</el-button>
	</div>
</template>

<script>
	export default {
		methods: {
			onNotice() {
				this.$notice({
					type: 'success',
					title: '我是dialog的标题',
					message: '我是提示的内容',
				})
					.then(() => {
						console.log('确定');
					})
					.catch(() => {
						console.log('取消');
					});
			},
			onNoticeCode() {
				this.$notice({
					code: 201,
					message: '测试code使用',
				})
					.then(() => {
						console.log('确定');
					})
					.catch(() => {
						console.log('取消');
					});
			},
		},
	};
</script>
```

:::

### Modal Options

| 参数      | 说明                                                 | 类型              | 可选值 | 默认值 |
| :-------- | :--------------------------------------------------- | :---------------- | :----- | :----- |
| iconClass | 图标名称 ，若不在图标库内则忽略                      | string            | \_     | \_     |
| title     | Modal 标题                                           | string            | \_     | \_     |
| message   | Modal 消息正文内容                                   | string / string[] | \_     | \_     |
| 其他参数  | 参数同 element-ui MessageBox.confirm 方法 的 options | object            | \_     | \_     |

### Notice Options

| 参数     | 说明                                                      |  类型  | 可选值                     | 默认值 |
| :------- | :-------------------------------------------------------- | :----: | :------------------------- | ------ |
| type     | 主题样式，如果不在可选值内将被忽略                        | string | success/warning/info/error | \_     |
| title    | Notice 标题                                               | string | \_                         | \_     |
| message  | Notice 消息正文内容                                       | string | \_                         | \_     |
| code     | 判断 type 类型，code 值 200 则取 success ，否则为 warning | number | \_                         | \_     |
| 其他参数 | 参数同 element-ui Notification 方法 的 options            | object | \_                         | \_     |
