---
pageClass: page-content
lang: zh-CN
---

## Divider 分割线

### 基本使用

::: demo

```html
<template>
	<div>基本使用</div>
	<d-divider />

	<div>设置margin</div>
	<d-divider :margin="[10,20]" />

	<div>设置文案</div>
	<d-divider>Divider</d-divider>

	<div>设置Color</div>
	<d-divider color="red">Divider</d-divider>
</template>

<script>
	export default {
		data() {
			return {};
		},
	};
</script>
```

:::

### Divider Attributes

| 参数      | 说明                                   | 类型            | 可选值                | 默认值     |
| :-------- | :------------------------------------- | :-------------- | --------------------- | ---------- |
| direction | 设置分割线方向                         | string          | horizontal / vertical | horizontal |
| color     | 设置分割线颜色                         | string          | \_                    | \_         |
| left      | 设置文案时定位文案位置 ,使用百分比定位 | number          | \_                    | \_         |
| margin    | 设置分割线上下、左右的 margin          | number/number[] | \_                    | \_         |

### Divider Slots

| name | 说明                                           |
| :--- | :--------------------------------------------- |
| \_   | 设置文案的内容，仅在 direction=horizontal 有效 |
