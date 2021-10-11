<template>
	<d-container>
		<d-header title="顶顶顶顶顶1" />

		<main class="d-main">
			<d-menu
				:default-active="defaultActive"
				:menus="menus"
				:keys="{
					path: 'en_name',
					title: 'name',
				}"
			/>

			<d-content
				:title="title"
				:show-back="['layout', 'tabs1', 'link'].includes($route.name)"
			>
				<router-view class="d-router-view"></router-view>
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
				{ name: 'Link 文字链接', en_name: 'link' },
				{ name: 'Modal 弹窗提示', en_name: 'modal4' },
				{ name: 'pageTabs 页面tabs', en_name: 'pageTabs' },
				{ name: 'Dialog 对话框', en_name: 'dialog' },
				{ name: 'Upload 文件上传', en_name: 'upload' },
				{ name: 'Table', en_name: 'table' },
				{ name: 'Form', en_name: 'form' },
				{ name: 'statistic', en_name: 'statistic' },
				{ name: 'Steps', en_name: 'steps' },
				{ name: 'TimeLine', en_name: 'timeline' },
			],
			defaultActive: '',
		};
	},
	watch: {
		$route: {
			immediate: true,
			handler({ matched }) {
				this.defaultActive = matched[1].name;
			},
		},
	},
	computed: {
		title() {
			const { query, meta } = this.$route;

			if (query.title) return query.title;

			return meta.title;
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
