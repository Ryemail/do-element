import TimelineItem from '../timeline/src/item.vue';

TimelineItem.install = function (Vue) {
	Vue.component(TimelineItem.name, TimelineItem);
};

export default TimelineItem;
