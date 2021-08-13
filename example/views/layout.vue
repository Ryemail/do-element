<template>
	<d-container>
		<d-header />

		<main class="d-main">
			<d-menu :default-active="$route.matched[0].name" :menus="menus" />

			<d-content title="测试">
				<router-view class="" />
				<div class="d-router-view">
					<p v-for="item in 100" :key="item">{{ item }}</p>
				</div>
			</d-content>
		</main>

		<d-footer />
	</d-container>
</template>

<script>
export default {
	data() {
		return {
			menus: [
				{ en_name: 'link', name: 'Link' },
				{ en_name: 'dialog', name: 'Dialog' },
				{ en_name: 'modal', name: 'Modal' },
				{ en_name: 'table', name: 'Table' },
				{ en_name: 'form', name: 'Form' },
				{ en_name: 'upload', name: 'Upload' },
				{ en_name: 'tabs', name: 'Tabs' },
			],
		};
	},
	methods: {},
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
