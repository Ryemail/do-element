import Vue from 'vue';
import App from './App.vue';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import '../theme/index.css';
import './styles/reset.less';
import './styles/fonts/iconfont.css';

import '../packages/theme-chalk/src/index.less';

import DoElement from '../packages/index.js';

import './mock';

Vue.use(ElementUI);

Vue.use(DoElement, 123);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router,
}).$mount('#app');
