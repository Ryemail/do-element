---
pageClass: page-content
lang: zh-CN
---

## Menu

### 使用

::: demo

```html
<template>
	<d-menu :default-active="active" :menus="menus" />
</template>

<script>
	export default {
		data() {
			return {
				active: 'link',
				menus: [
					{ en_name: 'link', name: 'Link' },
					{ en_name: 'dialog', name: 'Dialog' },
					{ en_name: 'modal', name: 'Modal' },
					{ en_name: 'table', name: 'Table' },
					{ en_name: 'form', name: 'Form' },
					{ en_name: 'upload', name: 'Upload' },
					{ en_name: 'tabs', name: 'Tabs' },
				],
			};
		},
	};
</script>
```

<= delete spaces here
:::

### Attributes

| 参数           | 说明                           | 类型     | 默认值 |
| :------------- | :----------------------------- | :------- | :----- |
| default-active | 当前激活的状态名称             | string   | \_     |
| menus          | 导航栏数据                     | object[] | []     |
| 其他参数       | 同 element-ui 的 menu 组件属性 | \_       | \_     |
