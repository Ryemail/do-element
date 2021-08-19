// import ElementUI from 'element-ui';
// import DoElement from 'do-element';
import 'element-ui/lib/theme-chalk/index.css';
import '../../lib/theme-chalk/index.css';
import './public/font/iconfont.css';

export default ({ Vue, router }) => {
	router.beforeEach((to, from, next) => {
		if (to.path === '/') {
			next('/zh/component/container');
		} else if (to.path === '/zh/component/') {
			next('/zh/component/container');
		} else if (to.path === '/zh/utils/') {
			next('/zh/utils/object');
		} else {
			next();
		}
	});

	Vue.mixin({
		mounted() {
			import('element-ui').then(function (E) {
				Vue.use(E);
			});

			import('do-element').then(function (D) {
				Vue.use(D);
			});
		},
	});
};
