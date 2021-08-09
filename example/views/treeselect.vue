<template>
	<div>
		<div class="module">
			<h3 class="module-title">默认使用</h3>
			<div>
				<gl-tree-select
					v-model="value"
					placeholder="请选择"
					:data="options"
				/>
				{{ value }}
			</div>
		</div>

		<div class="module">
			<h3 class="module-title">数据懒加载</h3>
			<gl-tree-select
				ref="tree"
				v-model="value2"
				placeholder="请选择"
				:data="options"
				:props="defaultProps"
				:load="loadNode"
				:default-expanded-keys="value2"
				:lazy="true"
			/>
			{{ value2 }}
		</div>

		<div class="module">
			<h3 class="module-title">在表单使用</h3>
			<gl-form
				:form="form"
				:label-width="140"
				:columns="columns"
				:rules="rules"
				@event="onEvent"
			>
				<template #tree="{ data }">
					<gl-tree-select
						ref="tree"
						v-model="data.address"
						placeholder="请选择"
						:data="options"
						:props="defaultProps"
						:load="loadNode"
						:lazy="true"
					/>
					{{ value2 }}
				</template>
			</gl-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: [2, 6],
			value2: [],
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
				this.value2 = [1, 2];
			}

			if (node.level === 1) {
				new Promise((resolve) => {
					let data = [];

					if (node.key == 1) {
						data = [
							{
								name: 'leaf',
								id: 2,
								leaf: true,
							},
							{
								name: 'zone',
								id: 3,
							},
						];
					}

					if (node.key === 4) {
						data = [
							{
								name: 'input',
								id: 5,
							},
							{
								name: 'select',
								id: 6,
							},
						];
					}
					resolve(data);
				}).then((data) => {
					resolve(data);
					this.value2 = [1, 2];
				});
			}
			// this.value2 = [1, 2];
		},
		// 表单事件
		onEvent(item) {
			console.log(item);
		},
	},
};
</script>
