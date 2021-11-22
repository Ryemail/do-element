<template>
	<a
		:class="['d-link', 'd-link--' + type, disabled && 'is-disabled']"
		@click="onClick"
	>
		<span class="d-link--inner">
			<slot />
		</span>
	</a>
</template>

<script>
export default {
	name: 'DLink',
	props: {
		to: { type: [String, Object], default: '' },

		type: { type: String, default: 'primary' },

		disabled: { type: Boolean, default: false },
	},
	methods: {
		onClick() {
			if (this.disabled) return false;

			if (this.to) {
				return this.$router.push(this.to);
			}

			this.$emit('click');
		},
	},
};
</script>
