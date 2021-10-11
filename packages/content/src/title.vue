<template>
	<div class="d-page-title">
		<template v-if="showBack">
			<el-link
				class="d-back"
				@click="onBack"
				icon="el-icon-back"
				:underline="false"
			>
				返回
			</el-link>
			<div class="d-page-divider"></div>
		</template>
		<span v-if="title" v-html="title"></span>
	</div>
</template>

<script>
export default {
	name: 'DPageTitle',
	props: {
		title: {
			type: String,
			default: () => '',
		},
		showBack: {
			type: Boolean,
			default: false,
		},
		back: {
			type: Function,
		},
	},
	methods: {
		onBack() {
			if (this.back) return this.back();

			this.$router.back();
		},
	},
};
</script>
