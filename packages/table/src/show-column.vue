<template>
	<el-popover placement="bottom-end" class="dd" width="100" trigger="hover">
		<svg
			slot="reference"
			viewBox="0 0 1024 1024"
			width="16"
			height="16"
			class="d-table-choose-icon"
		>
			<path
				d="M3.42898915 64.07163449H136.26026667v126.46991644H3.42898915v-126.46991644zM3.42898915 443.48720925H136.26026667v126.46991644H3.42898915v-126.46991644zM3.42898915 822.89695858H136.26026667v126.47574187H3.42898915v-126.47574187zM256.36882205 64.07163449H1015.19997155v126.46991644H256.36882205v-126.46991644zM256.36882205 443.48720925H1015.19997155v126.46991644H256.36882205v-126.46991644zM256.36882205 822.89695858H1015.19997155v126.47574187H256.36882205v-126.47574187z"
				fill="#000000"
			></path>
		</svg>

		<el-checkbox-group class="d-table-checkbox-group" v-model="checked">
			<el-checkbox
				v-for="item in labels"
				:key="item.prop"
				:label="item.prop"
			>
				{{ item.label }}
			</el-checkbox>
		</el-checkbox-group>
	</el-popover>
</template>

<script>
export default {
	name: 'DShowColumn',
	model: {
		event: 'change',
	},
	props: {
		value: {
			type: Array,
			default: () => [],
		},
		labels: {
			type: Array,
			default: () => [],
		},
	},
	computed: {
		checked: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit('change', value);
			},
		},
	},
};
</script>
