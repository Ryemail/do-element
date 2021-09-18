---
pageClass: page-content
lang: zh-CN
---

## Menu

### 使用

::: demo

```html
<template>
	<div>
		<d-menu
			:default-active="active"
			:router="false"
			:menus="menus"
		></d-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 'link',
				menus: [
					{ path: 'link', title: 'Link' },
					{ path: 'dialog', title: 'Dialog' },
					{ path: 'modal', title: 'Modal' },
					{ path: 'table', title: 'Table' },
					{ path: 'form', title: 'Form' },
					{ path: 'upload', title: 'Upload' },
					{ path: 'tabs', title: 'Tabs' },
				],
			};
		},
	};
</script>
```

:::

### Attributes

| 参数           | 说明                           | 类型     | 默认值                                    |
| :------------- | :----------------------------- | :------- | :---------------------------------------- |
| default-active | 当前激活的状态名称             | string   | \_                                        |
| menus          | 导航栏数据                     | object[] | []                                        |
| keys           | menu-item 数据属性 key         | object   | {path:'path',title:'title',child:'child'} |
| 其他参数       | 同 element-ui 的 menu 组件属性 | \_       | \_                                        |
