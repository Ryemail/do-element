import './styles/reset.less';
import './styles/fonts/iconfont.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

import ElementUI from 'element-ui';
import '../theme/index.css';

// import 'element-ui/lib/theme-chalk/index.css';

import DoElement from '../packages/index.js';
import '../packages/theme-chalk/src/index.less';

import './mock';

Vue.use(ElementUI);

Vue.use(DoElement, { headers: { TOKEN: 'ssssss' } });

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router,
}).$mount('#app');
