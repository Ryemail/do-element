<template>
	<div>
		<div class="module">
			<h3 class="module-title">基本表单</h3>

			<div class="flex">
				<span class="label">是否开启行内</span>
				<el-switch v-model="isInline"> </el-switch>
			</div>
			<div class="flex">
				<span class="label">label 宽度</span>
				<el-input style="width: 300px" v-model="width" />
			</div>

			<d-form
				:form="form"
				:inline="isInline"
				:label-width="width"
				:columns="columns"
				@event="onEvent"
			/>
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
				:form="form"
				:inline="isInline"
				:label-width="width"
				:columns="columns"
				:button="null"
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
				datetimerange: '',
			},
			form2: {
				name: '',
				address: '',
			},
			visible: false,
			columns: [
				{
					type: 'input',
					prop: 'name',
					label: '姓名',
					placeholder: '请输入姓名',
					attrs: {
						clearable: true,
					},
				},
				{
					type: 'select',
					prop: 'sex',
					label: '性别',
					placeholder: '请选择性别',
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
				{
					type: 'textarea',
					prop: 'mark',
					label: '文本框',
					placeholder: '请输入内容',
				},
				{
					type: 'switch',
					prop: 'switch',
					label: '开关切换',
					inactive: 1,
					active: 2,
				},
				{
					type: 'checkbox',
					prop: 'check',
					label: '复选框',
					options: [
						{ value: '2', label: '复选框1' },
						{ value: '3', label: '复选框2' },
						{ value: '4', label: '复选框3' },
					],
				},
				{
					type: 'radio',
					prop: 'radio',
					label: '单选框',
					options: [
						{ value: '2', label: '单选框1' },
						{ value: '3', label: '单选框2' },
						{ value: '4', label: '单选框3' },
					],
				},
			],
			columns2: [
				{
					type: 'input',
					prop: 'name',
					label: '姓名',
					placeholder: '请输入姓名',
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
			console.log(item);
		},
		// 弹窗事件
		onDialogEvent(item) {
			console.log(item);
		},
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
