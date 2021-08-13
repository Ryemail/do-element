import ElementUI from 'element-ui';
import DoElement from '../../lib';
import 'element-ui/lib/theme-chalk/index.css';
import '../../lib/theme-chalk/index.css';
import './public/font/iconfont.css';

export default ({ Vue }) => {
	Vue.use(ElementUI);
	Vue.use(DoElement);
};
