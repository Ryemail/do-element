---
pageClass: page-content
lang: zh-CN
---

## Steps

### 基本使用

::: demo

```html
<template>
	<d-steps :active="active">
		<d-step title="第一步"> 第一步 </d-step>
		<d-step title="第二步"> 第二步 </d-step>
		<d-step title="第三步"> 第三步 </d-step>
	</d-steps>
	<el-button @click="onNext">下一步</el-button>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
			};
		},
		methods: {
			onNext() {
				if (this.active < 2) this.active++;
			},
		},
	};
</script>
```

:::

### 显示每一项

::: demo

```html
<template>
	<d-steps :active="active" :show-current="false" active-number-color="blue">
		<d-step title="第一步"> 第一步 </d-step>
		<d-step title="第二步"> 第二步 </d-step>
		<d-step title="第三步"> 第三步 </d-step>
	</d-steps>
</template>

<script>
	export default {
		data() {
			return {
				active: 1,
			};
		},
	};
</script>
```

:::

### 简约风格

::: demo

```html
<template>
	<d-steps :active="active" :simple="true" :show-current="false">
		<d-step title="第一步"> 第一步 </d-step>
		<d-step title="第二步"> 第二步 </d-step>
		<d-step title="第三步"> 第三步 </d-step>
	</d-steps>
</template>

<script>
	export default {
		data() {
			return {
				active: 1,
			};
		},
	};
</script>
```

:::

### Steps Attributes

| 参数                | 说明                               | 类型    | 默认值 |
| :------------------ | :--------------------------------- | :------ | ------ |
| active              | 当前激活的 step 索引               | number  | 0      |
| space               | step 之间的 margin 间隔            | number  | 10     |
| simple              | 是否应用简洁风格                   | boolean | false  |
| isNumber            | 是否显示数字                       | boolean | true   |
| active-number-color | 激活状态下的数字颜色，合法的颜色值 | string  |
| active-line-color   | 激活状态下 line 颜色，合法的颜色值 | string  | \_     |
| show-current        | 是否只显示当前激活的 step 内容     | boolean | true   |

### Step Attributes

| 参数  | 说明 | 类型   | 默认值 |
| :---- | :--- | :----- | ------ |
| title | 标题 | string | \_     |

### Slots

| name | 说明     |
| :--- | :------- |
| \_   | 插槽内容 |
