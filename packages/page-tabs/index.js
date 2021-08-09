import PageTabs from './src/index.vue';

PageTabs.install = function (Vue) {
	Vue.component(PageTabs.name, PageTabs);
};

export default PageTabs;
