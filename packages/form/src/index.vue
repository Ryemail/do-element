<template>
	<el-form
		v-if="dataForm"
		:model="dataForm"
		:size="size"
		ref="eform"
		:class="['d-form']"
		:inline="inline"
		:show-message="showMessage"
		:label-width="labelWidth + 'px'"
		v-bind="$attrs"
	>
		<div :class="['flex-1']">
			<el-form-item
				v-for="(item, key) in dataColumns"
				:label="item.label"
				:prop="item.prop"
				:show-message="!!item.showMessage"
				:key="key"
			>
				<!-- input -->
				<el-input
					v-if="item.type === 'input'"
					v-model="dataForm[item.prop]"
					v-bind="item.attr"
					v-on="item.event"
					@input="onInput(item)"
				>
					<!-- 前后插槽 -->
					<span v-if="item.prepend" slot="prepend">
						<slot :name="item.prepend" :data="item"></slot>
					</span>
					<span v-if="item.append" slot="append">
						<slot :name="item.append" :data="item"></slot>
					</span>
					<span v-if="item.prefix" slot="prefix">
						<slot :name="item.prefix" :data="item"></slot>
					</span>
					<span v-if="item.suffix" slot="suffix">
						<slot :name="item.suffix" :data="item"></slot>
					</span>
				</el-input>

				<!-- input textarea -->
				<el-input
					v-if="item.type === 'textarea'"
					type="textarea"
					v-model="dataForm[item.prop]"
					v-bind="item.attr"
					v-on="item.event"
				/>

				<!-- 开关 -->
				<el-switch
					v-if="item.type === 'switch'"
					v-model="dataForm[item.prop]"
					v-bind="item.attr"
					v-on="item.event"
				/>

				<!-- select -->
				<el-select
					v-if="item.type === 'select'"
					v-model="dataForm[item.prop]"
					v-bind="item.attr"
					v-on="item.event"
				>
					<el-option
						v-for="(option, index) in item.options"
						:key="index"
						:label="option.label"
						:value="option.value"
					/>
				</el-select>

				<!-- 复选 -->
				<el-checkbox-group
					v-if="item.type === 'checkbox'"
					v-model="dataForm[item.prop]"
					v-bind="item.attr"
					v-on="item.event"
				>
					<el-checkbox
						v-for="(option, index) in item.options"
						:key="index"
						:label="option.value"
						:name="item.prop"
					>
						{{ option.label }}
					</el-checkbox>
				</el-checkbox-group>

				<!-- 单选 -->
				<el-radio-group
					v-if="item.type === 'radio'"
					v-model="dataForm[item.prop]"
					v-bind="item.attr"
					v-on="item.event"
				>
					<el-radio
						v-for="(option, index) in item.options"
						:key="index"
						:label="option.value"
					>
						{{ option.label }}
					</el-radio>
				</el-radio-group>

				<!-- 时间 select -->
				<el-time-select
					v-if="item.type === 'timeSelect'"
					v-model="dataForm[item.prop]"
					v-bind="{ clearable: false, ...item.attr }"
					v-on="item.event"
				/>

				<!-- 时间 picker -->
				<div class="d-time-picker" v-if="item.type === 'time'">
					<el-time-picker
						v-model="dataForm[item.prop]"
						:range-separator="
							item | onSeparator(dataForm[item.prop])
						"
						v-bind="{
							clearable: false,
							...timeDefaultFormat,
							...item.attr,
						}"
						:ref="item.prop"
						v-on="item.event"
					/>
					<div
						v-if="
							item.attr &&
							item.attr.isRange &&
							dataForm[item.prop].length
						"
						class="d-time-picker--value"
						@click="onPicker(item.prop)"
					>
						{{ dataForm[item.prop] | onPickerValue(item) }}
					</div>
				</div>

				<!-- 日期时间 -->
				<el-date-picker
					v-if="dateType.includes(item.type)"
					:type="item.type"
					v-model="dataForm[item.prop]"
					:range-separator="item | onSeparator(dataForm[item.prop])"
					:format="onFormat(item)"
					v-bind="{
						clearable: false,
						valueFormat: onFormat(item),
						...item.attr,
					}"
					v-on="item.event"
				/>

				<!-- 日期时间范围 -->
				<div
					class="d-time-picker"
					v-if="dateRangeType.includes(item.type)"
				>
					<el-date-picker
						:type="item.type"
						v-model="dataForm[item.prop]"
						:range-separator="
							item | onSeparator(dataForm[item.prop])
						"
						:format="onFormat(item)"
						v-bind="{
							clearable: false,
							valueFormat: onFormat(item),
							...item.attr,
						}"
						:ref="item.prop"
						v-on="item.event"
					/>
					<div
						@click="onPicker(item.prop)"
						class="d-time-picker--value"
						v-if="
							Array.isArray(dataForm[item.prop]) &&
							dataForm[item.prop].length
						"
					>
						{{ dataForm[item.prop] | onPickerValue(item) }}
					</div>
				</div>

				<slot
					v-if="item.type === 'slot'"
					:name="item.slot"
					:item="item"
					:data="dataForm"
					:index="key"
				>
				</slot>
			</el-form-item>
		</div>
		<div
			v-if="buttonArray.length"
			:class="{
				'd-form-footer': true,
				'd-form-footer--top': !inline,
			}"
			:style="{ textAlign: buttonAlign }"
		>
			<el-button
				v-for="(item, key) in buttonArray"
				:key="key"
				:type="item.type"
				@click="onEvent(item)"
				@keyup.enter="onEvent(item)"
			>
				{{ item.label }}
			</el-button>
		</div>
	</el-form>
</template>

<script>
import { parseEqual, formatNumber, clone } from '@/utils';

export default {
	name: 'DForm',
	props: {
		form: { type: Object, default: () => ({}) },

		columns: { type: Array, default: () => [] },

		size: { type: String, default: 'medium' },

		labelWidth: { type: Number, default: 140 },

		showMessage: { type: Boolean, default: true },

		inline: { type: Boolean, default: false },

		buttons: { type: [Array, Object], default: () => [] },

		buttonAlign: { type: String, default: 'center' },
	},
	data() {
		return {
			dataColumns: clone(this.columns),
			isChange: false,
			dataForm: clone(this.form),
			dateType: ['datetime', 'date'],
			dateRangeType: ['datetimerange', 'daterange'],
			timeDefaultFormat: {
				valueFormat: 'HH:mm',
				format: 'HH:mm',
			},
		};
	},
	computed: {
		eform() {
			return this.$refs.eform;
		},
		parent() {
			let parent = this.$parent;
			while (parent) {
				if (parent.$options.name !== 'DDialog') {
					parent = parent.$parent;
				} else {
					return parent;
				}
			}
			return false;
		},
		buttonArray() {
			if (this.buttons === null) return [];

			if (this.buttons.length) return this.buttons;

			if (this.inline) {
				return [
					{ type: 'default', prop: 'reset', label: '重置' },
					{ type: 'primary', prop: 'submit', label: '查询' },
				];
			}

			return [
				{ type: 'primary', prop: 'submit', label: '确定' },
				{ type: 'default', prop: 'reset', label: '取消' },
			];
		},
		parentVisible() {
			return this.parent ? this.parent.$attrs.visible : false;
		},
	},
	filters: {
		onSeparator(item, value) {
			if (!value) return '';

			if (Array.isArray(value) && value.every((val) => val))
				return (item.attr && item.attr.rangeSeparator) || '-';

			return '';
		},
		onPickerValue(value, item) {
			const separator = (item.attr && item.attr.rangeSeparator) || ' - ';

			return value[0] + separator + value[1];
		},
	},
	watch: {
		form: {
			handler(value) {
				this.dataForm = value;
			},
			deep: true,
		},
		dataForm: {
			handler(value, oldValue) {
				this.isChange = parseEqual(value, oldValue || {});

				this.onValidate();

				this.$emit('update:form', value);
			},
			deep: true,
			immediate: true,
		},
		columns: {
			handler() {
				!this.parent && this.onLazyLoad();
			},
			deep: true,
			immediate: true,
		},
		parentVisible: {
			handler(value) {
				if (value && !this.isChange) {
					this.onLazyLoad();
				}

				this.clearValidate();
			},
			immediate: true,
		},
	},
	methods: {
		onPicker(name) {
			this.$refs[name][0].focus();
		},
		onFormat(item) {
			if (item.attr && item.attr.format) {
				return item.attr.format;
			} else if (['datetimerange', 'datetime'].includes(item.type)) {
				return 'yyyy-MM-dd hh:mm';
			} else {
				return 'yyyy-MM-dd';
			}
		},
		onInput(item) {
			if (!item.number) return;

			this.dataForm[item.prop] = formatNumber(
				this.dataForm[item.prop],
				item.number
			);
		},

		// 验证插槽元素
		onValidate() {
			this.columns.forEach((val) => {
				if (val.slot) {
					if (this.dataForm[val.prop].length) {
						this.clearValidate(val.prop);
					}
				}
			});
		},

		onLazyLoad() {
			const type = ['select', 'checkbox', 'radio'];

			this.columns.forEach((item, index) => {
				if (type.includes(item.type)) {
					if (item.lazyLoad) {
						item.lazyLoad((options) => {
							item.options = options;
							this.$set(this.dataColumns, index, item);
						}, this.dataForm);
					} else {
						this.$set(this.dataColumns, index, item);
					}
				}
			});
		},
		onEvent(item) {
			if (item.prop === 'submit') return this.validate(item);

			if (item.prop === 'reset') {
				this.$emit('event', item);

				// 解决重置时间空数组[''] 报错问题
				this.columns.forEach((val) => {
					const types = ['datetimerange', 'daterange', 'time'];
					if (types.includes(val.type)) {
						this.dataForm[val.prop] = '';
					}
				});
				this.resetFields();

				return;
			}

			this.$emit('event', item);
		},
		validate(item) {
			let flag = false;

			const valider = (valid) => {
				flag = valid;

				if (valid && item) return this.$emit('event', item);
			};

			this.eform.validate(valider);

			return Promise.resolve(flag);
		},
		resetFields() {
			this.$nextTick(() => {
				this.eform.resetFields();
			});
		},
		clearValidate(props) {
			this.$nextTick(() => {
				this.eform.clearValidate(props);
			});
		},
	},
};
</script>
