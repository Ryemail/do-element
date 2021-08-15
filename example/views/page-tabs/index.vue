<template>
	<div>
		<div class="module">
			<h3 class="module-title">pageTabs</h3>
			<d-page-tabs :default-active="$route.name" router :tabs="tabs" />

			<router-view />

			<div class="module-tips">
				<h3 class="module-tips-title">温馨提示</h3>
				<ul class="module-tips-content">
					<li>点击事件不可与to属性同时存在，同时存在时取点击事件</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabs: [
				{ title: 'Link', to: { name: 'tabs1' } },
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
