---
pageClass: page-content
lang: zh-CN
---

## PageTitle 页面标题

### 基础用法

::: demo

```html
<template>
	<d-page-title title="测试" :show-back="true"></d-page-title>
</template>

<script>
	export default {
		data() {
			return {
				//
			};
		},
	};
</script>
```

<= delete spaces here
:::

### 自定义返回事件

::: demo

```html
<template>
	<d-page-title title="测试" :show-back="true" :back="onBack"></d-page-title>
</template>

<script>
	export default {
		data() {
			return {
				//
			};
		},
		methods: {
			onBack() {
				alert('点击了返回');
			},
		},
	};
</script>
```

<= delete spaces here
:::

### Attributes

| 参数      | 说明               | 类型     | 默认值 |
| :-------- | :----------------- | :------- | :----- |
| show-back | 是否显示返回按钮   | boolean  | false  |
| title     | 页面标题           | string   | \_     |
| back      | 自定义返回按钮事件 | Function | \_     |
