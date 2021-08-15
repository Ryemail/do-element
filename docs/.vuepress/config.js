module.exports = {
	lang: 'zh-CN',
	title: 'do-design',
	plugins: ['demo-container'],
	head: [
		['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
	],
	themeConfig: {
		displayAllHeaders: true,
		head: [['link', { rel: 'icon', href: '/image/log.png' }]],
		nav: [
			{ text: '组件', link: '/link/' },
			{ text: '工具', link: '/utils/' },
		],
		sidebar: [
			{ title: 'Container 页面布局', path: '/container/' },
			{ title: 'Link 文字链接', path: '/link/' },
			{ title: 'Form 表单', path: '/form/' },
			{ title: 'Table 表格', path: '/table/' },
			{ title: 'Dialog 对话框', path: '/dialog/' },
			{ title: 'Menu 导航菜单', path: '/menu/' },
			{ title: 'Modal 操作弹窗', path: '/modal/' },
			{ title: 'PageTabs tab页', path: '/page-tabs/' },
			{ title: 'Upload 文件上传', path: '/upload/' },
			{ title: 'TreeSelect', path: '/tree-select/' },
		],
		repo: 'Ryemail/do-design',
		repoLabel: 'GitHub',
	},
};
