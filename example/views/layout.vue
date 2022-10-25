<template>
	<d-container>
		<d-header title="DOELEMENT">
			<template #content>
				<div>dsdsds</div>
			</template>
		</d-header>

		<main class="d-main">
			<d-menu :default-active="defaultActive" :menus="menus" />

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
				{ title: 'Link 文字链接', path: 'link' },
				{ title: 'Modal 弹窗提示', path: 'modal' },
				{ title: 'pageTabs 页面tabs', path: 'pageTabs' },
				{ title: 'Dialog 对话框', path: 'dialog' },
				{ title: 'Upload 文件上传', path: 'upload' },
				{ title: 'Table', path: 'table' },
				{ title: 'Form', path: 'form' },
				{ title: 'statistic', path: 'statistic' },
				{ title: 'Steps', path: 'steps' },
				{ title: 'TimeLine', path: 'timeline' },
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
