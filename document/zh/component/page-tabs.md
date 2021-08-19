---
pageClass: page-content
lang: zh-CN
---

## PageTabs 页面 tab 切换

### 基础用法

::: demo

```html
<template>
	<div>
		<d-page-tabs :default-active.sync="active" :tabs="tabs" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [
					{ title: '首页', to: '/' },
					{ title: 'Link', to: '/link' },
				],
				active: 0,
			};
		},
	};
</script>
```

<= delete spaces here
:::

### Attributes

| 参数           | 说明                  | 类型     | 默认值 |
| :------------- | :-------------------- | :------- | :----- |
| tabs           | tab 列表              | object[] | []     |
| default-active | 当前激活 tab 的 index | number   | \_     |
| router         | 是否开启路由模式      | boolean  | false  |
