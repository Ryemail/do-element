<template>
	<div class="do-steps-pane" :class="[!parent.showCurrent && 'do-steps-1']">
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
				return this.currentIndex == this.parent.active;
			}

			return this.currentIndex <= this.parent.active;
		},
	},
};
</script>
