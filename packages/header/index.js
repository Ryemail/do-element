import Header from './src/index.vue';

Header.install = function (Vue) {
	Vue.component(Header.name, Header);
};

export default Header;
