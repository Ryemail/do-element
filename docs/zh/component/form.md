---
pageClass: page-content
lang: zh-CN
---

## Form

### 输入框 Input

::: demo

```html
<template>
	<d-form :columns="columns" :buttons="null" :form="form">
		<template #name2> 前置内容 </template>
		<template #appendName2> 后置内容 </template>
		<template #suffixName3> 尾 </template>
		<template #prefixName3> 头 </template>
	</d-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					name2: '',
					name3: '',
				},
				columns: [
					{
						type: 'input',
						prop: 'name',
						label: '输入框',
						placeholder: '请输入文字',
					},
					{
						type: 'input',
						prop: 'name2',
						label: '内容插槽',
						placeholder: '输入框前置内容',
						prepend: 'name2', //  输入框前置内容
						append: 'appendName2', //  输入框后置内容
					},

					{
						type: 'input',
						prop: 'name3',
						label: '头尾插槽',
						placeholder: '输入框后置内容',
						prefix: 'prefixName3', //  输入框头部内容
						suffix: 'suffixName3', //  输入框尾部内容
					},
				],
			};
		},
	};
</script>
```

:::

### 文本框 textarea

::: demo

```html
<template>
	<d-form :columns="columns" :form="form"></d-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					textarea: '',
				},
				rules: {
					textarea: [{ required: true, message: '请选择' }],
				},
				columns: [
					{
						type: 'textarea',
						prop: 'textarea',
						label: '文本框',
						placeholder: '请输入文字',
						showWordLimit: true,
						maxlength: 20,
					},
				],
			};
		},
	};
</script>
```

:::

### Select 下拉框

::: demo

```html
<template>
	<d-form :columns="columns" :buttons="null" :form="form"></d-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					select: '',
					select1: '',
				},
				columns: [
					{
						type: 'select',
						prop: 'select',
						label: '输入框',
						options: [
							{ value: '1', label: '男' },
							{ value: '2', label: '女' },
						],
						placeholder: '请选择性别',
					},
					{
						type: 'select',
						prop: 'select1',
						label: '数据懒加载',
						placeholder: '请选择性别',
						lazyLoad(relsove, param) {
							setTimeout(() => {
								relsove([
									{ value: '1', label: '男' },
									{ value: '2', label: '女' },
								]);
							}, 1000);
						},
					},
				],
			};
		},
	};
</script>
```

:::

### chckbox 多选

::: demo

```html
<template>
	<d-form :columns="columns" :buttons="null" :form="form"> </d-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					checkbox: [],
				},
				columns: [
					{
						type: 'checkbox',
						prop: 'checkbox',
						label: '复选框',
						placeholder: '请选择性别',
						lazyLoad(relsove, param) {
							relsove([
								{ value: '1', label: '男' },
								{ value: '2', label: '女' },
							]);
						},
					},
				],
			};
		},
	};
</script>
```

:::

### radio 单选

::: demo

```html
<template>
	<d-form :columns="columns" :buttons="null" :form="form"></d-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					radio: [],
				},
				columns: [
					{
						type: 'radio',
						prop: 'radio',
						label: '单选框',
						placeholder: '请选择性别',
						lazyLoad(relsove, param) {
							relsove([
								{ value: '1', label: '男' },
								{ value: '2', label: '女' },
							]);
						},
					},
				],
			};
		},
	};
</script>
```

:::

### datepicker 时间选择

::: demo

```html
<template>
	<d-form :columns="columns" :buttons="null" :form="form"></d-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					date: '',
					daterange: '',
					datetime: '',
					datetimerange: '',
				},
				columns: [
					{
						type: 'date',
						prop: 'date',
						label: '时间',
						placeholder: '请选择时间',
					},
					{
						type: 'daterange',
						prop: 'daterange',
						label: '日期范围',
						placeholder: ['请选择日期'],
					},
					{
						type: 'datetime',
						prop: 'datetime',
						label: '日期时间',
						placeholder: '请选择日期',
					},
					{
						type: 'datetimerange',
						prop: 'datetimerange',
						label: '日期时间范围',
						placeholder: '请选择日期时间范围',
					},
				],
			};
		},
	};
</script>
```

:::

### 在 dialog 中使用

::: demo

```html
<template>
	<el-button @click="visible=true">dialog</el-button>

	<d-dialog :visible.sync="visible" title="嵌套表单" @event="onEvent">
		<d-form
			:columns="columns"
			:rules="rules"
			:buttons="null"
			:form="form"
			ref="form"
		></d-form>
	</d-dialog>
</template>

<script>
	export default {
		data() {
			return {
				visible: false,
				form: {
					date: '',
					daterange: '',
					datetime: '',
					datetimerange: '',
				},
				rules: {
					date: [
						{
							required: true,
							type: 'date',
							message: '请选择活动区域',
							trigger: 'change',
						},
					],
					datetime: [
						{
							required: true,
							type: 'date',
							message: '请选择活动区域',
							trigger: 'change',
						},
					],
					daterange: [
						{
							required: true,
							message: '请选择活动区域',
							trigger: 'change',
						},
					],
					datetimerange: [
						{
							required: true,
							message: '请选择活动区域',
							trigger: 'change',
						},
					],
				},
				columns: [
					{
						type: 'date',
						prop: 'date',
						label: '时间',
						placeholder: '请选择时间',
					},
					{
						type: 'daterange',
						prop: 'daterange',
						label: '日期范围',
						placeholder: ['请选择日期'],
					},
					{
						type: 'datetime',
						prop: 'datetime',
						label: '日期时间',
						placeholder: '请选择日期',
					},
					{
						type: 'datetimerange',
						prop: 'datetimerange',
						label: '日期时间范围',
						placeholder: '请选择日期时间范围',
					},
				],
			};
		},
		methods: {
			async onEvent(item) {
				if (item.prop === 'submit') {
					// 验证表单
					const validated = await this.$refs.form.validate();

					console.log(validated);
				}
			},
		},
	};
</script>
```

:::
