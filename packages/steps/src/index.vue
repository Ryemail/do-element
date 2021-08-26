<template>
	<div class="do-steps">
		<div class="do-steps-header">
			<div
				class="do-steps-item"
				:style="style"
				:class="isActive(index) ? 'is-active' : ''"
				v-for="(item, index) in children"
				:key="index"
			>
				<span class="do-steps-number">{{ index + 1 }}</span>
				<span class="do-steps-label">{{ item.title }}</span>
			</div>
		</div>

		<div
			class="do-steps-content"
			:style="{ display: showCurrent ? 'block' : 'flex' }"
		>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DoSteps',
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
