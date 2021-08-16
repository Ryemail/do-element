---
pageClass: page-content
lang: zh-CN
---

## TreeSelect

### 默认使用

::: demo

```html
<d-tree-select v-model="value" placeholder="请选择" :data="options" />

<script>
	export default {
		data() {
			return {
				options: [
					{
						id: 1,
						label: '一级 1',
						children: [
							{
								id: 4,
								label: '二级 1-1',
								children: [
									{
										id: 9,
										label: '三级 1-1-1',
									},
									{
										id: 10,
										label: '三级 1-1-2',
									},
								],
							},
						],
					},
					{
						id: 2,
						label: '一级 2',
						children: [
							{
								id: 5,
								label: '二级 2-1',
							},
							{
								id: 6,
								label: '二级 2-2',
							},
						],
					},
					{
						id: 3,
						label: '一级 3',
						children: [
							{
								id: 7,
								label: '二级 3-1',
							},
							{
								id: 8,
								label: '二级 3-2',
							},
						],
					},
				],
				value: [],
			};
		},
	};
</script>
```

:::

### 数据懒加载

::: demo

```html
<d-tree-select
	ref="tree"
	v-model="value"
	placeholder="请选择"
	:props="defaultProps"
	:load="loadNode"
	:default-expanded-keys="value"
	:lazy="true"
/>

<script>
	export default {
		data() {
			return {
				value: [],
				defaultProps: {
					label: 'name',
					children: 'zones',
					isLeaf: 'leaf',
				},
			};
		},
		methods: {
			loadNode(node, resolve) {
				if (node.level > 1) return resolve([]);

				if (node.level === 0) {
					resolve([
						{ name: 'region', id: 1 },
						{ name: 'form', id: 4 },
					]);
					this.value = [1, 2];
				}

				if (node.level === 1) {
					new Promise((resolve) => {
						let data = [];

						if (node.key == 1) {
							data = [
								{ name: 'leaf', id: 2, leaf: true },
								{ name: 'zone', id: 3, leaf: true },
							];
						}

						if (node.key === 4) {
							data = [
								{ name: 'input', id: 5, leaf: true },
								{ name: 'select', id: 6, leaf: true },
							];
						}
						resolve(data);
					}).then((data) => {
						resolve(data);
						this.value = [1, 2];
					});
				}
			},
		},
	};
</script>
```

:::

### 在表单中使用

::: demo

```html
<d-form
	:form="form"
	:label-width="140"
	:columns="columns"
	:rules="rules"
	@event="onEvent"
>
	<template #tree="{ data }">
		<d-tree-select
			ref="tree"
			v-model="data.address"
			placeholder="请选择"
			:props="defaultProps"
			:load="loadNode"
			:lazy="true"
		/>
	</template>
</d-form>

<script>
	export default {
		data() {
			return {
				value: [],
				form: {
					address: [],
				},
				rules: {
					address: [
						{
							type: 'array',
							required: true,
							message: '请选择地址',
							trigger: 'change',
						},
					],
				},
				columns: [
					{
						type: 'slot',
						slot: 'tree',
						showMessage: true,
						prop: 'address',
						label: '上传图片',
					},
				],
				defaultProps: {
					label: 'name',
					children: 'zones',
					isLeaf: 'leaf',
				},
			};
		},
		methods: {
			// 表单事件
			onEvent(item) {
				console.log(item);
			},
			loadNode(node, resolve) {
				if (node.level > 1) return resolve([]);

				if (node.level === 0) {
					resolve([
						{ name: 'region', id: 1 },
						{ name: 'form', id: 4 },
					]);
				}

				if (node.level === 1) {
					new Promise((resolve) => {
						let data = [];

						if (node.key == 1) {
							data = [
								{ name: 'leaf', id: 2, leaf: true },
								{ name: 'zone', id: 3, leaf: true },
							];
						}

						if (node.key === 4) {
							data = [
								{ name: 'input', id: 5, leaf: true },
								{ name: 'select', id: 6, leaf: true },
							];
						}
						resolve(data);
					}).then((data) => {
						resolve(data);
					});
				}
			},
		},
	};
</script>
```

:::
