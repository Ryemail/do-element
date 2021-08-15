---
pageClass: page-content
lang: zh-CN
---

## Link 文字链接

### 基础用法

::: demo

```html
<template>
	<div>
		<d-link icon="biaozhu" type="primary">主色</d-link>
		<d-link icon="biaozhu" type="success">成功</d-link>
		<d-link icon="biaozhu" type="danger">危险</d-link>
		<d-link icon="biaozhu" type="warning">警告</d-link>
	</div>
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

### 禁用

::: demo

```html
<template>
	<div>
		<d-link icon="biaozhu" :disabled="disabled" type="primary">禁用</d-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				disabled: true,
			};
		},
	};
</script>
```

<= delete spaces here
:::

### 点击事件

::: demo

```html
<template>
	<div>
		<d-link @click="onClick" icon="leixing">点击事件</d-link>
	</div>
</template>

<script>
	export default {
		methods: {
			onClick() {
				alert('点击事件');
			},
		},
	};
</script>
```

<= delete spaces here
:::

### Attributes

| 参数     | 说明                | 类型          | 可选值                               | 默认值  |
| :------- | :------------------ | :------------ | :----------------------------------- | :------ |
| tpye     | 类型                | string        | primary / success / warning / danger | primary |
| disabled | 是否禁用状态        | boolean       | \_                                   | false   |
| icon     | 图标名称            | string        | \_                                   | \_      |
| to       | Vue Router 路径参数 | Object/string | \_                                   | \_      |
| order    | icon 位置           | boolean       | \_                                   | false   |
| prefix   | icon 的前缀         | string        | \_                                   | d-icon- |

### Events

| 事件名 | 说明     | 参数 |
| :----- | :------- | :--- |
| click  | 点击事件 | \_   |
