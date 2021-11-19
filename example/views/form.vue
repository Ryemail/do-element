<template>
	<div d-title="4444">
		<div class="module">
			<h3 class="module-title">基本表单</h3>

			<d-form
				:form="form"
				:columns="columns"
				@event="onEvent"
				:inline="true"
				:label-width="0"
			/>
			<d-divider></d-divider>

			<br />
			<br />
			<br />
		</div>

		<div class="module">
			<h3 class="module-title">插槽使用</h3>
		</div>
		<d-form
			:form="form2"
			:label-width="width"
			:columns="columns2"
			@event="onEvent"
		>
			<template #address="{ data }">
				<el-input v-model="data.address" placeholder="请输入地址" />
			</template>
		</d-form>

		<div class="module">
			<h3 class="module-title">弹窗表单</h3>
			<d-link icon="zengjia" type="sucDcess" @click="visible = true">
				弹窗表单
			</d-link>
		</div>
		<d-dialog
			:visible.sync="visible"
			title="弹窗表单"
			@event="onDialogEvent"
		>
			<d-form
				ref="form"
				:form="form"
				:inline="isInline"
				:label-width="width"
				:columns="columns"
				:rules="rules"
				:buttons="null"
			/>
		</d-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isInline: false,
			width: 140,
			form: {
				name: '',
				sex: '',
				switch: 2,
				mark: '',
				radio: '3',
				check: ['2'],
				date: '',
				daterange: '',
				datetime: '',
				time1: '',
				datetimerange: '',
			},
			rules: {
				name: [{ required: true }],
				sex: [{ required: true }],
			},
			value1: '',
			form2: {
				name: '',
				address: '',
			},
			visible: false,
			columns1: [
				{
					type: 'input',
					prop: 'name',
					placeholder: '请输入姓名',
				},
				{
					type: 'select',
					prop: 'sex',
					placeholder: '请选择性别',
					options: [],
				},
				{
					type: 'date',
					prop: 'date',
					placeholder: '请选择时间',
				},
				{
					type: 'daterange',
					prop: 'daterange',
					placeholder: '请选择时间',
				},
			],
			columns: [
				{
					type: 'input',
					prop: 'name',
					attr: {
						placeholder: '请输入姓名',
					},
				},
				{
					type: 'select',
					prop: 'sex',
					// label: '性别',
					attr: {
						placeholder: '请选择性别',
					},
					lazyLoad(resolve) {
						setTimeout(() => {
							resolve([
								{ value: '1', label: '男' },
								{ value: '2', label: '女' },
							]);
						}, 1000);
					},
				},
				{
					type: 'date',
					prop: 'date',
					attr: {
						placeholder: '请选择时间',
					},
				},
				{
					type: 'time',
					prop: 'time1',
					attr: {
						isRange: true,
						clearable: true,
						startPlaceholder: '请选择时间',
						placeholder: '请选择时间',
					},
				},
				{
					type: 'daterange',
					prop: 'daterange',
					separator: '至',
					attr: {
						startPlaceholder: '请选择日期',
					},
				},
				{
					type: 'datetime',
					prop: 'datetime',
					// label: '日期时间',
					attr: {
						placeholder: '请选择日期',
					},
				},
				{
					type: 'datetimerange',
					prop: 'datetimerange',

					// label: '日期时间范围',
					attr: {
						clearable: true,
						startPlaceholder: '请选择日期时间范围',
					},
				},
				// {
				// 	type: 'textarea',
				// 	prop: 'mark',
				// 	placeholder: '请输入内容',
				// },
				// {
				// 	type: 'switch',
				// 	prop: 'switch',
				// 	inactive: 1,
				// 	active: 2,
				// },
				// {
				// 	type: 'checkbox',
				// 	prop: 'check',
				// 	// label: '复选框',
				// 	options: [
				// 		{ value: '2', label: '复选框1' },
				// 		{ value: '3', label: '复选框2' },
				// 		{ value: '4', label: '复选框3' },
				// 	],
				// },
				// {
				// 	type: 'radio',
				// 	prop: 'radio',
				// 	// label: '单选框',
				// 	options: [
				// 		{ value: '2', label: '单选框1' },
				// 		{ value: '3', label: '单选框2' },
				// 		{ value: '4', label: '单选框3' },
				// 	],
				// },
			],
			columns2: [
				{
					type: 'input',
					prop: 'name',
					label: '姓名',
					slot: 'default',
				},
				{
					type: 'slot',
					prop: 'address',
					slot: 'address',
					label: '地址',
				},
			],
		};
	},
	methods: {
		// 表单事件
		onEvent(item) {
			console.log(this.form);
			if (item.prop === 'reset') {
				//
			}
		},
		// 弹窗事件
		onDialogEvent(item) {
			console.log(item);
			if (item.prop === 'cancel') {
				this.$refs.form.resetFields();
			}
			if (item.prop === 'submit') {
				this.$refs.form.validate().then((val) => {
					console.log(val);
				});
			}
		},
		onMore() {
			console.log('ddd');
		},
	},
	created() {
		this.$nextTick(() => {
			const arr = {
				type: 'select',
				prop: 'sex',
				placeholder: '请选择性别',
				options: [
					{ value: '1', label: '男' },
					{ value: '2', label: '女' },
				],
			};
			this.columns1.splice(1, 1, arr);
		});
	},
};
</script>

<style lang="less" scoped>
.flex {
	display: flex;
	margin-bottom: 10px;
	.label {
		width: 125px;
		padding-right: 15px;
		text-align: right;
	}
}
</style>
