import Link from './link';
import PageTabs from './page-tabs';
import Dialog from './dialog';
import Upload from './upload';
import Table from './table';
import Form from './form';
import Container from './container';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Menu from './menu';
import TimelineItem from './timeline-item';
import Timeline from './timeline';
import Steps from './steps';
import Step from './step';
import Statistic from './statistic';
import StatisticItem from './statistic-item';
import Divider from './divider';

import { modal, notice } from './modal';
import PageTitle from './page-title';

const components = [
	Link,
	PageTabs,
	Dialog,
	Upload,
	Table,
	Form,
	Header,
	Footer,
	Container,
	Content,
	Menu,
	Timeline,
	TimelineItem,
	Steps,
	Step,
	Statistic,
	StatisticItem,
	Divider,
	PageTitle,
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
	Table,
	Form,
	Container,
	Header,
	Footer,
	Content,
	PageTitle,
	Menu,
	Timeline,
	TimelineItem,
	Steps,
	Step,
	Statistic,
	StatisticItem,
	Divider,
	modal,
	notice,
};
