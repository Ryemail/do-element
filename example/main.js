import Vue from 'vue';
import App from './App.vue';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './styles/fonts/iconfont.css';
import './styles/reset.less';

import '../packages/theme-chalk/src/index.less';

import GlDsign from '../packages/index.js';

import './mock';

Vue.use(ElementUI);

Vue.use(GlDsign);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router,
}).$mount('#app');
