<script>
export default {
	name: 'DPageTabs',
	render(h) {
		const children = this.tabs.map((val, index) => {
			return h('a', {
				class: [
					'd-page-tabs-item',
					this.defaultActive === this.onGetIndex(index) &&
						'active-tabs-item',
				],
				domProps: {
					innerHTML: val.title,
				},
				attrs: { index },
			});
		});

		return h(
			'div',
			{
				on: {
					click: this.onClick,
				},
				class: ['d-page-tabs'],
			},
			children
		);
	},

	props: {
		tabs: {
			type: Array,
			default: () => [],
		},
		defaultActive: {
			type: [String, Number],
			default: '',
		},
		router: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		onClick(event) {
			if (event.target === event.currentTarget) return;

			const index = event.target.attributes['index'].nodeValue * 1;

			if (!this.router) {
				this.$emit('update:default-active', this.onGetIndex(index));
			}

			if (this.router) {
				if (this.onGetIndex(index) === this.defaultActive) return;

				this.$router.push(this.tabs[index].to);
			}
		},
		onGetIndex(index) {
			if (!this.router) return index;

			const current = this.tabs[index];

			let name = current.to;

			if (typeof current.to === 'object') {
				name = current.to.path || current.to.name;
			}

			return name;
		},
	},
};
</script>
