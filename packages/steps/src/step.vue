<template>
	<div class="d-steps-pane" :class="[!parent.showCurrent && 'd-steps-1']">
		<div v-show="isActive"><slot></slot></div>
	</div>
</template>

<script>
export default {
	name: 'DStep',
	props: {
		title: {
			type: String,
			default: '',
		},
	},

	computed: {
		parent() {
			return this.$parent;
		},
		currentIndex() {
			return this.parent.$children.indexOf(this);
		},
		isActive() {
			const { showCurrent } = this.parent;

			if (showCurrent) {
				return this.currentIndex === this.parent.active;
			}

			return true;
		},
	},
};
</script>
