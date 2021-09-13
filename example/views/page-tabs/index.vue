<template>
	<div>
		<h3 class="module-title">pageTabs</h3>
		<d-page-tabs :default-active="$route.name" router :tabs="tabs" />

		<router-view />
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabs: [
				{
					title: 'Link',
					to: { name: 'tabs1', query: { title: '5555' } },
				},
				{ title: 'Modal', to: { name: 'tabs2' } },
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
