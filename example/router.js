import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
	base: './',
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/link',
		},
		{
			path: '/link',
			name: 'link',
			component: () => import('./views/link.vue'),
		},
		{
			path: '/modal',
			name: 'modal',
			component: () => import('./views/modal.vue'),
		},
		{
			path: '/pageTabs',
			name: 'pageTabs',
			redirect: '/tabs1',
			component: () => import('./views/page-tabs/index.vue'),
			children: [
				{
					path: '/tabs1',
					name: 'tabs1',
					component: () => import('./views/page-tabs/tabs1.vue'),
				},
				{
					path: '/tabs2',
					name: 'tabs2',
					component: () => import('./views/page-tabs/tabs2.vue'),
				},
			],
		},
		{
			path: '/dialog',
			name: 'dialog',
			component: () => import('./views/dialog.vue'),
		},
		{
			path: '/upload',
			name: 'upload',
			component: () => import('./views/upload.vue'),
		},
		{
			path: '/treeselect',
			name: 'treeselect',
			component: () => import('./views/treeselect.vue'),
		},
		{
			path: '/table',
			name: 'table',
			component: () => import('./views/table.vue'),
		},
		{
			path: '/form',
			name: 'form',
			component: () => import('./views/form.vue'),
		},
		{
			path: '/layout',
			name: 'layout',
			components: {
				layout: () => import('./views/layout.vue'),
			},
		},
	],
});

export default router;
