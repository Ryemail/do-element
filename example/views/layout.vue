<template>
	<gl-container>
		<gl-header />

		<main class="gl-main">
			<gl-menu :default-active="$route.matched[0].name" :menus="menus" />

			<gl-content title="测试">
				<router-view class="gl-router-view" />
			</gl-content>
		</main>

		<gl-footer />
	</gl-container>
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
