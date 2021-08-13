module.exports = {
	lang: 'zh-CN',
	title: 'do-design',
	plugins: ['demo-block'],
	head: [
		['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
	],
	themeConfig: {
		head: [['link', { rel: 'icon', href: '/image/log.png' }]],
		nav: [
			{ text: '组件', link: '/link/' },
			{ text: '工具', link: '/utils/' },
		],
		sidebar: [
			{ title: 'Link 文字链接', path: '/link/' },
			{ title: 'Container 页面布局', path: '/container/' },
			{ title: 'Form 表单', path: '/form/' },
			{ title: 'Table 表格', path: '/table/' },
			{ title: 'Dialog 对话框', path: '/dialog/' },
			{ title: 'Modal 操作弹窗', path: '/modal/' },
			{ title: 'Notice 操作提示', path: '/notice/' },
			{ title: 'PageTabs tab页', path: '/page-tabs/' },
			{ title: 'Upload 文件上传', path: '/upload/' },
			{ title: 'TreeSelect', path: '/tree-select/' },
		],
		repo: 'Ryemail/do-design',
		repoLabel: 'GitHub',
	},
};
