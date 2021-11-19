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
						attr: {
							placeholder: '请输入文字',
						},
					},
					{
						type: 'input',
						prop: 'name2',
						label: '内容插槽',
						attr: {
							placeholder: '输入框前置内容',
						},
						prepend: 'name2', //  输入框前置内容
						append: 'appendName2', //  输入框后置内容
					},

					{
						type: 'input',
						prop: 'name3',
						attr: {
							placeholder: '输入框后置内容',
						},
						label: '头尾插槽',
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

### Input ObjectKey

| 参数  | 说明                           | 类型   | 可选值                                                                                           | 默认值 |
| :---- | :----------------------------- | :----- | :----------------------------------------------------------------------------------------------- | :----- |
| attr  | 继承 Element-ui Input 组件属性 | obejct | 同[Element-ui Input 组件](https://element.eleme.cn/#/zh-CN/component/input#input-attributes)属性 | \_     |
| event | 继承 Element-ui Input 组件事件 | obejct | 同 [Element-ui Input 组件](https://element.eleme.cn/#/zh-CN/component/input#input-events)事件    | \_     |

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
						attr: {
							placeholder: '请输入文字',
							showWordLimit: true,
							maxlength: 20,
						},
					},
				],
			};
		},
	};
</script>
```

:::

### Textarea ObjectKey

| 参数  | 说明                           | 类型   | 可选值                                                                                           | 默认值 |
| :---- | :----------------------------- | :----- | :----------------------------------------------------------------------------------------------- | :----- |
| attr  | 继承 Element-ui Input 组件属性 | obejct | 同[Element-ui Input 组件](https://element.eleme.cn/#/zh-CN/component/input#input-attributes)属性 | \_     |
| event | 继承 Element-ui Input 组件事件 | obejct | 同 [Element-ui Input 组件](https://element.eleme.cn/#/zh-CN/component/input#input-events)事件    | \_     |

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
						attr: {
							placeholder: '请选择性别',
						},
					},
					{
						type: 'select',
						prop: 'select1',
						label: '数据懒加载',
						attr: {
							placeholder: '请选择性别',
						},
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

### Select ObjectKey

| 参数  | 说明                            | 类型   | 可选值                                                                                              | 默认值 |
| :---- | :------------------------------ | :----- | :-------------------------------------------------------------------------------------------------- | :----- |
| attr  | 继承 Element-ui Select 组件属性 | obejct | 同[Element-ui Select 组件](https://element.eleme.cn/#/zh-CN/component/select#select-attributes)属性 | \_     |
| event | 继承 Element-ui Select 组件事件 | obejct | 同 [Element-ui Select 组件](https://element.eleme.cn/#/zh-CN/component/select#select-events)事件    | \_     |

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
						attr: {
							placeholder: '请选择性别',
						},
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

### Checkbox ObjectKey

| 参数  | 说明                              | 类型   | 可选值                                                                                                    | 默认值 |
| :---- | :-------------------------------- | :----- | :-------------------------------------------------------------------------------------------------------- | :----- |
| attr  | 继承 Element-ui Checkbox 组件属性 | obejct | 同[Element-ui Checkbox 组件](https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-attributes)属性 | \_     |
| event | 继承 Element-ui Checkbox 组件事件 | obejct | 同 [Element-ui Checkbox 组件](https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-events)事件    | \_     |

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
						attr: {
							placeholder: '请选择性别',
						},
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

### Radio ObjectKey

| 参数  | 说明                           | 类型   | 可选值                                                                                           | 默认值 |
| :---- | :----------------------------- | :----- | :----------------------------------------------------------------------------------------------- | :----- |
| attr  | 继承 Element-ui Radio 组件属性 | obejct | 同[Element-ui Radio 组件](https://element.eleme.cn/#/zh-CN/component/radio#radio-attributes)属性 | \_     |
| event | 继承 Element-ui Radio 组件事件 | obejct | 同 [Element-ui Radio 组件](https://element.eleme.cn/#/zh-CN/component/radio#radio-events)事件    | \_     |

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
						attr: {
							placeholder: '请选择时间',
						},
					},
					{
						type: 'daterange',
						prop: 'daterange',
						label: '日期范围',
						attr: {
							startPlaceholder: '请选择日期',
						},
					},
					{
						type: 'datetime',
						prop: 'datetime',
						label: '日期时间',
						attr: {
							placeholder: '请选择日期',
						},
					},
					{
						type: 'datetimerange',
						prop: 'datetimerange',
						label: '日期时间范围',
						attr: {
							startPlaceholder: '请选择日期时间范围',
						},
					},
				],
			};
		},
	};
</script>
```

:::

### date 组件说明

| type                       | attr                                                                                                          | event                                                                                                      |
| :------------------------- | :------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------- |
| `datetimerange`,`datetime` | 同[Element-ui DateTimePicker 组件](https://element.eleme.cn/#/zh-CN/component/datetime-picker#attributes)属性 | 同 [Element-ui DateTimePicker 组件](https://element.eleme.cn/#/zh-CN/component/datetime-picker#events)事件 |
| `daterange`,`date`         | 同[Element-ui DatePicker 组件](https://element.eleme.cn/#/zh-CN/component/datet-picker#attributes)属性        | 同 [Element-ui DatePicker 组件](https://element.eleme.cn/#/zh-CN/component/date-picker#events)事件         |
| `timeSelect`,`time`        | 同[Element-ui TimePicker 组件](https://element.eleme.cn/#/zh-CN/component/time-picker#attributes)属性         | 同 [Element-ui TimePicker 组件](https://element.eleme.cn/#/zh-CN/component/time-picker#events)事件         |

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
						attr: {
							placeholder: '请选择时间',
						},
					},
					{
						type: 'daterange',
						prop: 'daterange',
						label: '日期范围',
						attr: {
							startPlaceholder: '请选择日期',
						},
					},
					{
						type: 'datetime',
						prop: 'datetime',
						label: '日期时间',
						attr: {
							placeholder: '请选择日期',
						},
					},
					{
						type: 'datetimerange',
						prop: 'datetimerange',
						label: '日期时间范围',
						attr: {
							startPlaceholder: '请选择日期时间范围',
						},
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

### Form Attributes

| 参数         | 说明                                                                                             | 类型   | 可选              | 默认值 |
| :----------- | :----------------------------------------------------------------------------------------------- | :----- | :---------------- | :----- |
| form         | form 表单数据                                                                                    | object | 必选              | \_     |
| columns      | 表单项配置参数列表 详情见下表                                                                    | array  | \_                | \_     |
| buttons      | 表单提交按钮 想情见下表                                                                          | array  | \_                | []     |
| button-align | 表单提交按钮位置                                                                                 | string | left/right/center | center |
| 其他参数     | 同[element-ui 的 Form 组件](https://element.eleme.cn/#/zh-CN/component/form#form-attributes)属性 | \_     | \_                |

### Columns Key

| 参数     | 说明                                                                      | 类型                    | 可选值                                                                                                         | 默认值 |
| :------- | :------------------------------------------------------------------------ | :---------------------- | :------------------------------------------------------------------------------------------------------------- | :----- | --- |
| type     | 表单组件类型                                                              | string                  | `datetimerange, datetime, daterange, date, timeSelect, time, input, select, checkbox, radio, textarea, switch` |        | \_  |
| prop     | form 数据 的 key (form[key])                                              | string                  | \_                                                                                                             | \_     |
| label    | 标签                                                                      | string                  | \_                                                                                                             | false  |
| options  | 列表数据 ，仅在 type=`select` \| `checkbox` \| `radio`有效                | array                   | \_                                                                                                             | \_     |
| lazyLoad | 动态加载 options 的方法 ，仅在 type=`select` \| `checkbox` \| `radio`有效 | Function(relsove,param) | \_                                                                                                             | \_     |
| prefix   | 输入框头部内容插槽名称，仅在 type=`input`有效                             | string                  | \_                                                                                                             | \_     |
| suffix   | 输入框尾部内容插槽名称，仅在 type=`input`有效                             | string                  | \_                                                                                                             | \_     |
| append   | 输入框前置内容插槽名称，仅在 type=`input`有效                             | string                  | \_                                                                                                             | false  |
| prepend  | 输入框后置内容插槽名称，仅在 type=`input`有效                             | string                  | \_                                                                                                             | \_     |
| attr     | 继承 Element-ui 表单组件属性                                              | obejct                  | \_                                                                                                             | \_     |
| event    | 继承 Element-ui 表单组件事件                                              | obejct                  | \_                                                                                                             | \_     |

### Form Event

| 事件名称 | 说明                   | 回调参数         |
| :------- | :--------------------- | :--------------- |
| validate | 任一表单项被校验后触发 | 返回一个 Promise |
