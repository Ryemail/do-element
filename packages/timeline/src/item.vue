<template>
	<li class="d-timeline-item">
		<div class="d-timeline-left" :style="onLeftStyle" v-if="isSlotLeft">
			<slot name="left" />
		</div>
		<div class="d-timeline-node">
			<div class="d-timeline-tail"></div>
			<div
				class="d-timeline-dot"
				:class="[(icon || $scopedSlots.dot) && 'd-timeline-icon']"
				:style="onStyle"
			>
				<i v-if="icon" :style="onIconStyle" :class="icon"></i>
				<slot name="dot" />
			</div>
		</div>
		<div class="d-timeline-right" v-if="isSlotRight">
			<slot />
		</div>
	</li>
</template>

<script>
export default {
	name: 'DTimelineItem',
	props: {
		color: {
			type: String,
			default: '',
		},
		icon: {
			type: String,
			default: '',
		},
		size: {
			type: Number,
			default: 0,
		},
	},

	computed: {
		parent() {
			return this.$parent;
		},
		sizeValue() {
			return this.size ? this.size : this.parent.size;
		},
		onStyle() {
			const style = { color: this.color };

			if (this.sizeValue) {
				style.width = this.sizeValue + 'px';
				style.height = this.sizeValue + 'px';
			}

			if (this.icon) return style;

			style.background = this.color;
			style.borderColor = this.color;

			return style;
		},
		onIconStyle() {
			return this.sizeValue ? { fontSize: this.sizeValue + 'px' } : null;
		},
		isSlotLeft() {
			return this.parent.isSlotLeft;
		},
		isSlotRight() {
			return this.parent.isSlotRight;
		},
		onLeftStyle() {
			const { leftWidth } = this.parent;
			return leftWidth ? { flex: '0 0 ' + leftWidth + 'px' } : null;
		},
	},
};
</script>
