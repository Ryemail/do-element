import PageTitle from '../content/src/title.vue';

PageTitle.install = function (Vue) {
	Vue.component(PageTitle.name, PageTitle);
};

export default PageTitle;
