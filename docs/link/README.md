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
			}
		},
	}
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
			}
		},
	}
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
				alert('点击事件')
			},
		},
	}
</script>
```

<= delete spaces here
:::
