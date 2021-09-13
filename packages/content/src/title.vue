<template>
	<div class="d-page-title">
		<template v-if="backs.includes($route && $route.name)">
			<el-link
				class="d-back"
				@click="$router.back()"
				icon="el-icon-back"
				:underline="false"
			>
				返回
			</el-link>
			<div class="d-divider"></div>
		</template>
		<span v-if="title" v-html="title"></span>
	</div>
</template>

<script>
export default {
	name: 'DPageTitle',
	props: {
		backs: {
			type: Array,
			default: () => [],
		},
		title: {
			type: String,
			default: () => '',
		},
	},
};
</script>
