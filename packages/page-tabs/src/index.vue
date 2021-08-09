<script>
export default {
	name: 'DPageTabs',
	render(h) {
		const children = this.tabs.map((val) => {
			return h('router-link', {
				class: ['d-page-tabs-item'],
				domProps: {
					innerHTML: val.title,
				},
				attrs: {
					to: val.to,
				},
			});
		});

		return h('div', { class: ['d-page-tabs'] }, children);
	},

	props: {
		tabs: {
			type: Array,
			default: () => [],
		},
	},
};
</script>
