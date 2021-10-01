<template>
	<div class="d-statistic" :class="[border && 'd-statistic-' + border]">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'DStatistic',
	props: {
		border: {
			type: String,
			default: 'bottom',
		},
		alignItems: {
			type: String,
			default: '',
		},
	},
};
</script>
