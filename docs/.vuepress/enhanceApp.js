import ElementUI from 'element-ui';
import DoElement from '../../lib';
import 'element-ui/lib/theme-chalk/index.css';
import '../../lib/theme-chalk/index.css';
import './public/font/iconfont.css';
import VueRouter from 'vue-router';

export default ({ Vue, router }) => {
	Vue.use(ElementUI);
	Vue.use(DoElement);

	router.beforeEach((to, from, next) => {
		if (to.path === '/') {
			next('/link');
		} else {
			next();
		}
	});
};
