import ElementUI from 'element-ui';
import DoElement from '../../lib';
import 'element-ui/lib/theme-chalk/index.css';
import '../../lib/theme-chalk/index.css';
import './public/font/iconfont.css';

export default ({ Vue, router }) => {
	Vue.mixin({
		mounted() {
			Vue.use(ElementUI);
			Vue.use(DoElement);
			// import('element-ui').then(function (E) {
			// 	console.log('我在加载element-ui');
			// 	Vue.use(E);

			// });
			// import('../../lib').then(function (D) {
			// 	Vue.use(D);
			// });
		},
	});

	router.beforeEach((to, from, next) => {
		if (to.path === '/') {
			next('/zh/component/guide/package');
		} else if (to.path === '/zh/component/') {
			next('/zh/component/container');
		} else if (to.path === '/zh/utils/') {
			next('/zh/utils/object');
		} else {
			next();
		}
	});
};
