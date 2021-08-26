const path = require('path');

module.exports = {
	lang: 'zh-CN',
	title: 'DoElement',
	base: '/do-element/',
	plugins: ['demo-container', '@vuepress/back-to-top'],
	dest: path.resolve(__dirname, '../../docs'),
	themeConfig: {
		sidebarDepth: 0,
		displayAllHeaders: true,
		lastUpdated: '上次更新',
		head: [['link', { rel: 'icon', href: '/image/log.png' }]],
		nav: [
			{ text: '组件', link: '/zh/component/' },
			{ text: '工具', link: '/zh/utils/' },
		],
		sidebar: {
			'/zh/component': [
				{
					title: '指南',
					sidebarDepth: 0, // 可选的, 默认值是 1
					collapsable: false,
					children: [
						{
							title: '介绍',
							path: '/zh/component/guide/package',
						},
						{
							title: '安装',
							path: '/zh/component/guide/install',
						},
					],
				},
				{
					title: '组件', // 必要的
					sidebarDepth: 0, // 可选的, 默认值是 1
					collapsable: false,
					children: [
						{
							title: 'Container 页面布局',
							path: '/zh/component/container',
						},
						{ title: 'Link 文字链接', path: '/zh/component/link' },
						{ title: 'Form 表单', path: '/zh/component/form' },
						{ title: 'Table 表格', path: '/zh/component/table' },
						{
							title: 'Dialog 对话框',
							path: '/zh/component/dialog',
						},
						{ title: 'Menu 导航菜单', path: '/zh/component/menu' },
						{
							title: 'Modal 操作弹窗',
							path: '/zh/component/modal',
						},
						{
							title: 'PageTabs tab页',
							path: '/zh/component/page-tabs',
						},
						{
							title: 'Upload 文件上传',
							path: '/zh/component/upload',
						},
					],
				},
			],
			'/zh/utils/': [
				{ title: 'Object', path: '/zh/utils/object' },
				{ title: 'Array', path: '/zh/utils/array' },
				{ title: 'Number', path: '/zh/utils/number' },
				{ title: 'Date', path: '/zh/utils/date' },
			],
		},
		repo: 'Ryemail/do-element',
		repoLabel: 'GitHub',
	},
};
