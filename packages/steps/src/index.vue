<template>
	<div class="d-steps">
		<div class="d-steps-header">
			<div
				:style="onStyle(index)"
				:class="[
					'd-steps-title',
					isActive(index) ? 'is-active' : '',
					!simple && 'd-steps-bg',
					index < active && 'd-steps-success',
				]"
				v-for="(item, index) in children"
				:key="index"
			>
				<span
					class="d-steps--inner"
					:class="[simple && 'd-steps-line-inner']"
				>
					<span
						v-if="isNumber"
						class="d-steps-number"
						:style="onNumberStyle(index)"
					>
						<template v-if="index >= active">
							{{ index + 1 }}
						</template>
						<i v-else class="el-icon-check"></i>
					</span>
					<span class="d-steps-label">{{ item.title }}</span>
				</span>
				<template v-if="simple">
					<div
						v-if="index < children.length - 1"
						:class="[
							'd-steps-line',
							index < active ? 'd-active-line' : '',
						]"
						:style="onLineStyle(index)"
					></div>
				</template>
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
		simple: {
			type: Boolean,
			default: false,
		},
		isNumber: {
			type: Boolean,
			default: true,
		},
		activeNumberColor: {
			type: String,
			default: '',
		},
		activeLineColor: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			children: [],
		};
	},
	methods: {
		isActive(currentIndex) {
			return currentIndex <= this.active;
		},
		onStyle(index) {
			if (index < this.children.length - 1) {
				return { marginRight: this.space + 'px' };
			}

			return null;
		},
		onNumberStyle(index) {
			const color = this.activeNumberColor;

			if (!color) {
				return null;
			}

			if (index <= this.active) {
				return { background: color, borderColor: color };
			}
			return null;
		},
		onLineStyle(index) {
			const color = this.activeLineColor;

			if (!color) {
				return null;
			}

			if (index <= this.active) {
				return { backgroundColor: color };
			}
			return null;
		},
	},
	mounted() {
		this.children = this.$children;
	},
};
</script>
