<template>
	<div class="d-timeline-item">
		<div class="d-timeline-left">{{ item }}你好</div>
		<div class="d-timeline-node">
			<div class="d-timeline-tail" v-if="index !== 2"></div>
			<div class="d-timeline-dot" :style="onColor()">
				<i v-if="icon" :class="icon"></i>
			</div>
		</div>
		<div class="d-timeline-right">444444444444444</div>
	</div>
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
	},

	computed: {
		onColor() {
			return { background: this.color, borderColor: this.color };
		},
	},
};
</script>
