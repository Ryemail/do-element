<template>
	<ul class="d-timeline">
		<slot></slot>
	</ul>
</template>

<script>
export default {
	name: 'DTimeline',
	props: {
		size: {
			type: Number,
			default: 0,
		},
		leftWidth: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			isSlotLeft: false,
			isSlotRight: false,
		};
	},

	mounted() {
		const children = this.$children;

		this.isSlotLeft = children.some((child) => child.$scopedSlots.left);

		this.isSlotRight = children.some((child) => child.$scopedSlots.default);
	},
};
</script>
