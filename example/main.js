import Vue from 'vue';
import App from './App.vue';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './styles/fonts/iconfont.css';
import './styles/reset.less';

import '../lib/theme-chalk/index.css';

import GlDsign from '../lib';

import './mock';

Vue.use(ElementUI);

Vue.use(GlDsign);

new Vue({
	render: (h) => h(App),
	router,
}).$mount('#app');
