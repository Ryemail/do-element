<template>
	<div class="d-divider" :class="['d-divider--' + direction]" :style="style">
		<div
			class="d-divider-content"
			:style="left ? { left: left + '%' } : null"
			v-if="direction === 'horizontal' && $scopedSlots.default"
		>
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: 'DDivider',
	props: {
		direction: {
			type: String,
			default: 'horizontal',
		},
		margin: {
			type: [Number, Array],
			default: 0,
		},
		color: {
			type: String,
			default: '',
		},
		left: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		isH() {
			return this.direction === 'horizontal';
		},
		style() {
			const { color, margin } = this;

			const cssStyle = {};

			if (color) cssStyle.backgroundColor = color;

			if (margin !== 0) {
				if (typeof margin === 'number') {
					cssStyle.margin = this.isH
						? `${margin}px 0`
						: `0 ${margin}px`;
				} else if (Array.isArray(margin)) {
					if (margin.length === 1) {
						cssStyle.margin = this.isH
							? `${margin[0]}px 0`
							: `0px ${margin[0]}px`;
					} else if (margin.length >= 2) {
						cssStyle.margin = this.isH
							? `${margin[0]}px 0 ${margin[1]}px`
							: `0 ${margin[0]}px 0 ${margin[1]}px`;
					}
				}
			}

			return cssStyle;
		},
	},
};
</script>
