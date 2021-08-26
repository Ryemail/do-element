---
pageClass: page-content
lang: zh-CN
---

## Steps

### 基本使用

::: demo

```html
<template>
	<do-steps :active="active">
		<do-step title="批次信息">
			<div><p>563563</p></div>
		</do-step>
		<do-step title="人员管理">
			<div><p>563563</p></div>
		</do-step>
		<do-step title="完成了">436363</do-step>
	</do-steps>
</template>

<script>
	export default {
		data() {
			return {
				active: 1,
			};
		},
		methods: {},
	};
</script>
```

:::

### 插槽使用

::: demo

```html
<template>
	<div>
		<el-button @click="onDialog">插槽使用</el-button>
		<d-dialog :visible.sync="visible">
			<!-- title  -->
			<div slot="title">插槽使用Dialog</div>

			<p v-for="item in 10">{{ item }}</p>

			<!-- footer -->
			<div slot="footer">
				<el-button @click="onCancel">知道了</el-button>
				<el-button @click="onSubmit">确定</el-button>
			</div>
		</d-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				visible: false,
			};
		},
		methods: {
			onDialog() {
				this.visible = true;
			},
			onCancel() {
				this.visible = false;
			},
			onSubmit() {
				console.log('确定');
			},
		},
	};
</script>
```

:::

### 自定义 footer 按钮

::: demo

```html
<template>
	<div>
		<el-button @click="onDialog">自定义footer</el-button>
		<d-dialog
			:visible.sync="visible"
			title="自定义 footer 按钮"
			:button="button"
			@event="onEvent"
		>
			<p v-for="item in 10">{{ item }}</p>
		</d-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				visible: false,
				button: [
					{ type: 'default', prop: 'close', label: '关闭' },
					{ type: 'default', prop: 'clear', label: '明白' },
					{ type: 'default', prop: 'confirm', label: '确定' },
				],
			};
		},
		methods: {
			onDialog() {
				this.visible = true;
			},
			onEvent(item) {
				alert('点击了' + JSON.stringify(item));
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
