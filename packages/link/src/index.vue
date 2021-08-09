<template>
	<a
		:class="[
			'd-link',
			'd-link--' + type,
			disabled && 'is-disabled',
			order && 'item-order',
		]"
		@click="onClick"
	>
		<i v-if="icon" :class="[prefix + icon]"></i>
		<span class="d-link--inner">
			<slot />
		</span>
	</a>
</template>

<script>
export default {
	name: 'DLink',
	props: {
		prefix: { type: String, default: 'd-icon-' },

		to: { type: [String, Object], default: '' },

		type: { type: String, default: 'primary' },

		icon: { type: String, default: '' },

		order: { type: Boolean, default: false },

		disabled: { type: Boolean, default: false },
	},
	methods: {
		onClick() {
			if (this.to) {
				return this.$router.push(this.to);
			}

			this.$emit('click');
		},
	},
};
</script>
