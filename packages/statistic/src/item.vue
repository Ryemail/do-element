<template>
	<div class="d-statistic-item">
		<slot></slot>
		<div class="d-statistic-centent" :style="{ alignItems: align }">
			<div class="d-value" :style="valueStyle">
				<span v-if="$scopedSlots.suffix" class="d-statistic-suffix">
					<slot name="suffix" />
				</span>
				<template v-if="!$scopedSlots.value">
					<span class="d-value--inner">{{ formatter() }}</span>
				</template>
				<slot v-else name="value" />
				<span v-if="$scopedSlots.prefix" class="d-statistic-prefix">
					<slot name="prefix" />
				</span>
			</div>
			<div class="d-title">
				<template v-if="!$scopedSlots.title">{{ title }}</template>
				<slot v-else name="title" />
			</div>
		</div>
	</div>
</template>

<script>
import { formatter } from './utils';

export default {
	name: 'DStatisticItem',
	props: {
		value: {
			type: [Number, String],
			default: 0,
		},
		title: {
			type: String,
			default: '',
		},
		valueStyle: {
			type: Object,
			default: () => null,
		},
		decimalSeparator: {
			type: String,
			default: '.',
		},
		groupSeparator: {
			type: String,
			default: ',',
		},
		precision: {
			type: Number,
		},
		alignItems: {
			type: String,
			default: '',
		},
	},
	computed: {
		align() {
			return this.$parent.alignItems || this.alignItems;
		},
	},
	methods: {
		formatter() {
			const { value, groupSeparator, decimalSeparator, precision } = this;

			return formatter(
				value,
				groupSeparator,
				decimalSeparator,
				precision
			);
		},
	},
};
</script>
