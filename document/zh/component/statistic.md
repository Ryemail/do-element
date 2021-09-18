---
pageClass: page-content
lang: zh-CN
---

## Statistic 数值统计

### 基本使用

::: demo

```html
<template>
	<d-statistic>
		<d-statistic-item title="3434" value="4343434" />
		<d-statistic-item title="3434" value="4343434" />
		<d-statistic-item title="3434" value="4343434" />
	</d-statistic>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
			};
		},
	};
</script>
```

:::

### Statistic Attributes

| 参数   | 说明     | 类型   | 可选值                 | 默认值 |
| :----- | :------- | :----- | ---------------------- | ------ |
| border | 边框设置 | string | none/top/bottom/updown | \_     |

### Statistic-Item Attributes

| 参数  | 说明 | 类型   | 默认值 |
| :---- | :--- | :----- | ------ |
| title | 标题 | string | \_     |
| value | 数值 | number | \_     |

### Statistic-Item Slots

| name  | 说明         |
| :---- | :----------- |
| title | 自定义 title |
| value | 自定义 value |
