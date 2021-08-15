---
pageClass: page-content
lang: zh-CN
---

## Upload

组件继承于 element-ui 的 uplaod 组件，除了占用原组件的 on-success、on-error、on-preview、on-remove
四个方法外，继承其他全部属性

### 文件上传

::: demo

```html
<template>
	<d-upload v-model="file" :action="action" accept="*">
		<el-button>文件上传</el-button>
	</d-upload>
</template>

<script>
	export default {
		data() {
			return {
				file: '',
				action: 'https://jsonplaceholder.typicode.com/posts/',
			};
		},
	};
</script>
```

:::

### 上传图片

::: demo

```html
<template>
	<d-upload v-model="value" :action="action" accept="image"> </d-upload>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				action: 'https://jsonplaceholder.typicode.com/posts/',
			};
		},
	};
</script>
```

:::

### 照片墙

::: demo

```html
<template>
	<d-upload
		v-model="value"
		:action="action"
		list-type="picture-card"
		accept="image"
	/>
</template>

<script>
	export default {
		data() {
			return {
				value: [
					'https://img1.baidu.com/it/u=3226799623,2105462533&fm=26&fmt=auto&gp=0.jpg',
					'https://img0.baidu.com/it/u=3330909856,760729931&fm=26&fmt=auto&gp=0.jpg',
					'https://img0.baidu.com/it/u=1842651722,868171696&fm=26&fmt=auto&gp=0.jpg',
				],
				action: 'https://jsonplaceholder.typicode.com/posts/',
			};
		},
	};
</script>
```

:::

### 在表单中使用

::: demo

```html
<template>
	<d-form
		:form="form"
		:label-width="140"
		:columns="columns"
		:rules="rules"
		@event="onEvent"
	>
		<template #upload="{ data }">
			<d-upload
				:action="action"
				accept="image"
				list-type="picture-card"
				v-model="data.images"
			>
			</d-upload>
		</template>
	</d-form>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				action: 'https://jsonplaceholder.typicode.com/posts/',
				form: {
					images: [],
				},
				rules: {
					images: [
						{
							type: 'array',
							required: true,
							message: '请上传图片',
						},
					],
				},
				columns: [
					{
						type: 'slot',
						slot: 'upload',
						prop: 'images',
						showMessage: true,
						label: '上传图片',
					},
				],
			};
		},
		methods: {
			onEvent(item) {
				console.log(item);
			},
		},
	};
</script>
```

:::

### Attributes

| 参数          | 说明                             | 类型             | 可选值                                    | 默认值 |
| :------------ | :------------------------------- | :--------------- | ----------------------------------------- | ------ |
| value/v-model | 必选参数,帮定值                  | string /string[] | \_                                        | \_     |
| action        | 必选参数，上传的地址             | string           | \_                                        | \_     |
| accept        | 文件上传的类型                   | string           | image/pdf/excel/word/audio/video/可自定义 | \_     |
| 其他参数      | 同 element-ui 的 upload 组件属性 | any              | \_                                        | \_     |

### Slots

| name  | 说明                       |
| :---- | :------------------------- |
| \_    | 文件上传的占位元素         |
| image | 用户覆盖默认的图片上传样式 |
| tip   | 提示说明文字               |
