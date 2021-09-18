<template>
	<div class="d-statistic-item">
		<div class="d-value" :style="valueStyle">
			<template v-if="!$scopedSlots.value">{{ value }}</template>
			<slot name="value" />
		</div>
		<div class="d-title">
			<template v-if="!$scopedSlots.title">{{ title }}</template>
			<slot name="title" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'DStatisticItem',
	props: {
		value: {
			type: Number,
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
	},
};
</script>
