<template>
	<div>
		<h3 class="module-title">pageTabs</h3>
		<d-page-tabs :default-active.sync="active" router :tabs="tabs" />

		<!-- <router-view /> -->
		<component :is="tabs[active].com"></component>
	</div>
</template>

<script>
import tabs1 from './tabs1.vue';
import tabs2 from './tabs2.vue';
export default {
	components: {
		tabs1,
		tabs2,
	},
	data() {
		return {
			tabs: [
				{
					title: 'Link',
					com: 'tabs1',
					to: '/layout/pageTabs/tabs1/0',
					// to: { name: 'tabs1', },
				},
				{
					title: 'Modal',
					com: 'tabs2',
					to: '/layout/pageTabs/tabs1/1',
				},
			],
			active: 0,
		};
	},
	methods: {
		onClick() {
			alert('点击事件');
		},
	},
};
</script>
