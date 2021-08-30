import Timeline from './src/index.vue';

Timeline.install = function (Vue) {
	Vue.component(Timeline.name, Timeline);
};

export default Timeline;
