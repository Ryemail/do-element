/*
 * @Author: your name
 * @Date: 2021-08-16 09:18:03
 * @LastEditTime: 2021-10-22 16:12:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \do-element\example\main.js
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '../packages/theme-chalk/src/index.less';

import '../theme/index.css';
import './styles/reset.less';
import './styles/fonts/iconfont.css';

import DoElement from '../packages/index.js';

import './mock';

Vue.use(ElementUI);

Vue.use(DoElement, 123);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router,
}).$mount('#app');
