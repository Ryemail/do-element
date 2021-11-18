<template>
	<el-dialog
		class="d-dialog"
		:class="[round && 'd-round-dialog']"
		v-bind="$attrs"
		v-on="$listeners"
		:width="width"
	>
		<slot />

		<span v-if="$scopedSlots.title" slot="title">
			<slot name="title" />
		</span>

		<div slot="footer" class="d-dialog-footer">
			<slot v-if="$scopedSlots.footer" name="footer"></slot>
			<template v-else>
				<el-button
					v-for="(item, key) in button"
					:key="key"
					:type="item.type"
					@click="onEvent(item)"
				>
					{{ item.label }}
				</el-button>
			</template>
		</div>
	</el-dialog>
</template>

<script>
export default {
	name: 'DDialog',
	props: {
		width: {
			type: String,
			default: '600px',
		},

		round: {
			type: Boolean,
			default: true,
		},
		button: {
			type: Array,
			default: () => [
				{ type: 'default', prop: 'cancel', label: '取消' },
				{ type: 'primary', prop: 'submit', label: '确定' },
			],
		},
	},
	methods: {
		onEvent(item) {
			this.$emit('event', item);
			this.$emit(item.prop);

			if (item.prop === 'cancel') {
				this.$emit('update:visible', false);
			}
		},
	},
};
</script>

<style></style>
