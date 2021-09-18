import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err);
};

const routes = [
	{
		path: '/',
		redirect: '/layout',
	},

	// {
	// 	path: '/pageTabs',
	// 	name: 'pageTabs',
	// 	redirect: '/tabs1',
	// 	component: () => import('./views/page-tabs/index.vue'),
	// 	children: [
	// 		{
	// 			path: '/tabs1',
	// 			name: 'tabs1',
	// 			component: () => import('./views/page-tabs/tabs1.vue'),
	// 		},
	// 		{
	// 			path: '/tabs2',
	// 			name: 'tabs2',
	// 			component: () => import('./views/page-tabs/tabs2.vue'),
	// 		},
	// 	],
	// },

	// {
	// 	path: '/upload',
	// 	name: 'upload',
	// 	component: () => import('./views/upload.vue'),
	// },
	// {
	// 	path: '/table',
	// 	name: 'table',
	// 	component: () => import('./views/table.vue'),
	// },
	// {
	// 	path: '/form',
	// 	name: 'form',
	// 	component: () => import('./views/form.vue'),
	// },
	{
		path: '/layout',
		name: 'layout',
		redirect: '/layout/pageTabs',
		components: {
			layout: () => import('./views/layout.vue'),
		},
		children: [
			{
				path: 'pageTabs',
				name: 'pageTabs',
				redirect: '/layout/pageTabs/tabs1',
				component: () => import('./views/page-tabs/index.vue'),
				children: [
					{
						path: 'tabs1',
						name: 'tabs1',
						component: () => import('./views/page-tabs/tabs1.vue'),
					},
					{
						path: 'tabs2',
						name: 'tabs2',
						component: () => import('./views/page-tabs/tabs2.vue'),
						meta: {
							title: 'tabs2',
						},
					},
				],
			},
			{
				path: 'form',
				name: 'form',
				component: () => import('./views/form.vue'),
				meta: {
					title: 'form',
				},
			},
			{
				path: 'steps',
				name: 'steps',
				component: () => import('./views/steps.vue'),
				meta: {
					title: 'steps',
				},
			},
			{
				path: 'link',
				name: 'link',
				component: () => import('./views/link.vue'),
			},
			{
				path: 'timeline',
				name: 'timeline',
				component: () => import('./views/timeline.vue'),
				meta: {
					title: 'timeline',
				},
			},
			{
				path: 'upload',
				name: 'upload',
				component: () => import('./views/upload.vue'),
			},
			{
				path: 'dialog',
				name: 'dialog',
				component: () => import('./views/dialog.vue'),
			},
			{
				path: 'table',
				name: 'table',
				component: () => import('./views/table.vue'),
			},
			{
				path: 'modal',
				name: 'modal',
				component: () => import('./views/modal.vue'),
			},
			{
				path: 'statistic',
				name: 'statistic',
				component: () => import('./views/statistic.vue'),
			},
		],
	},
	// {
	// 	path: '/steps',
	// 	name: 'steps',
	// 	component: () => import('./views/steps.vue'),
	// },
	// {
	// 	path: '/timeline',
	// 	name: 'timeline',
	// 	component: () => import('./views/timeline.vue'),
	// },
];

const router = new VueRouter({
	base: './',
	mode: 'history',
	routes,
});

export default router;
