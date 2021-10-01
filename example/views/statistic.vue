<template>
	<div class="statistic">
		<d-statistic align-items="start">
			<d-statistic-item title="3434" value="4343434.89" />
			<d-statistic-item title="3434" value="4343434.32333" :precision="2">
				<template #suffix>899</template>
			</d-statistic-item>
			<d-statistic-item title="3434" value="4343434" :precision="2" />
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
