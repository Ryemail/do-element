<template>
	<div class="d-steps">
		<div class="d-steps-header">
			<div
				class="d-steps-item"
				:style="style"
				:class="isActive(index) ? 'is-active' : ''"
				v-for="(item, index) in children"
				:key="index"
			>
				<span class="d-steps-number">{{ index + 1 }}</span>
				<span class="d-steps-label">{{ item.title }}</span>
			</div>
		</div>

		<div
			class="d-steps-content"
			:style="{ display: showCurrent ? 'block' : 'flex' }"
		>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DSteps',
	props: {
		active: {
			type: Number,
			default: 0,
		},
		space: {
			type: Number,
			default: 10,
		},
		showCurrent: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			children: [],
		};
	},
	computed: {
		style() {
			return { marginRight: this.space + 'px' };
		},
	},
	methods: {
		isActive(currentIndex) {
			return currentIndex <= this.active;
		},
	},
	mounted() {
		this.children = this.$children;
	},
};
</script>
