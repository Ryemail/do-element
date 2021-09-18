import StatisticItem from '../statistic/src/item.vue';

StatisticItem.install = function (Vue) {
	Vue.component(StatisticItem.name, StatisticItem);
};

export default StatisticItem;
