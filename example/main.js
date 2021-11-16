import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import './styles/reset.less';
import './styles/fonts/iconfont.css';

import ElementUI from 'element-ui';

import '../theme/index.css';

import '../packages/theme-chalk/src/index.less';

import DoElement from '../packages/index.js';

import './mock';

Vue.use(ElementUI);

Vue.use(DoElement);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router,
}).$mount('#app');
