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
		<d-statistic-item title="销售总量" value="1000" />
		<d-statistic-item>
			<template #title>插槽使用</template>
			<template #prefix>555</template>
			<template #value>2000</template>
		</d-statistic-item>
		<d-statistic-item title="昨日订单量" value="3000" />
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

| 参数        | 说明             | 类型   | 可选值                      | 默认值 |
| :---------- | :--------------- | :----- | --------------------------- | ------ |
| border      | 边框设置         | string | none/top/bottom/updown      | \_     |
| align-items | 设置每项是否居中 | string | 同 flex 布局 align-items 值 | \_     |

### Statistic-Item Attributes

| 参数              | 说明             | 类型            | 默认值                      |
| :---------------- | :--------------- | :-------------- | --------------------------- | --- |
| title             | 标题             | string          | \_                          |
| value             | 数值             | string / number | \_                          |
| value-style       | 设置数值的样式   | CSSProperties   | \_                          |
| precision         | 数值精度         | number          | \_                          |
| decimal-separator | 设置小数点       | string          | .                           |
| group-separator   | 设置千分位标识符 | string          | ,                           |
| align-items       | 设置每项是否居中 | string          | 同 flex 布局 align-items 值 | \_  |

### Statistic-Item Slots

| name   | 说明                       |
| :----- | :------------------------- |
| \_     | 默认插槽，占据元素右边部分 |
| title  | 自定义 title               |
| value  | 自定义 value               |
| prefix | value 的后缀内容           |
| suffix | value 的前缀内容           |
