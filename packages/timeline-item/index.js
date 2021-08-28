import TimelineItem from '../timeline/src/index.vue';

TimelineItem.install = function (Vue) {
	Vue.component(TimelineItem.name, TimelineItem);
};

export default TimelineItem;
