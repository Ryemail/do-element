<template>
	<div class="statistic">
		<d-statistic>
			<d-statistic-item title="3434" value="4343434" />
			<d-statistic-item title="3434" value="4343434" />
			<d-statistic-item title="3434" value="4343434" />
		</d-statistic>
	</div>
</template>

<script>
export default {
	methods: {
		onClick() {
			alert('点击事件');
		},
	},
};
</script>

<style scoped>
.statistic {
	display: flex;
}
</style>
