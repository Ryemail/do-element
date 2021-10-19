<template>
	<header class="d-header" :class="[fixed && 'd-header-fixed']">
		<div class="d-header-content">
			<el-link class="d-logo" :underline="false" :href="href">
				<el-image class="d-logo-image" :src="logo" />
				<span style="margin: 0 4px 0 8px">{{ logoName }}</span>
				<i class="el-icon-arrow-right"></i>
			</el-link>
			<div class="d-header-titile">{{ title }}</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'DHeader',
	props: {
		title: {
			type: String,
			default: '',
		},
		logoName: {
			type: String,
			default: '工作台',
		},
		fixed: {
			type: Boolean,
			default: false,
		},
		logo: String,
		href: String,
	},
};
</script>
