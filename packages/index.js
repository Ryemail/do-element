import Link from './link';
import PageTabs from './page-tabs';
import Dialog from './dialog';
import Upload from './upload';
import TreeSelect from './tree-select';
import Table from './table';
import Form from './form';
import Container from './container';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Menu from './menu';
import { modal, notice } from './modal';

const components = [
	Link,
	PageTabs,
	Dialog,
	Upload,
	TreeSelect,
	Table,
	Form,
	Header,
	Footer,
	Container,
	Content,
	Menu,
];

function install(Vue) {
	components.forEach((component) => {
		Vue.component(component.name, component);
	});

	Vue.prototype.$modal = modal;

	Vue.prototype.$notice = notice;
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install,
	Link,
	PageTabs,
	Dialog,
	Upload,
	TreeSelect,
	Table,
	Form,
	Container,
	Header,
	Footer,
	Content,
	Menu,
	modal,
	notice,
};
