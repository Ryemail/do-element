<template>
	<el-menu
		v-bind="$attrs"
		v-on="$listeners"
		:default-active="defaultActive"
		class="d-menu"
		background-color="#3E3E69"
		text-color="#C3C3DB"
		active-text-color="#FFFFFF"
		:router="router"
	>
		<d-submenu v-for="(item, index) in menus" :key="index" :item="item" />
	</el-menu>
</template>

<script>
import DSubmenu from './submenu.vue';

export default {
	name: 'DMenu',
	components: { DSubmenu },
	props: {
		menus: {
			type: Array,
			default: () => [],
		},
		defaultActive: {
			type: String,
			default: '',
		},
		router: {
			type: Boolean,
			default: true,
		},
		textColor: {
			type: String,
			default: '#C3C3DB',
		},
		activeTextColor: {
			type: String,
			default: '#FFFFFF',
		},
		backgroundColor: {
			type: String,
			default: '#3E3E69',
		},
		keys: {
			type: Object,
			default() {
				return { path: 'path', title: 'title', child: 'child' };
			},
		},
	},
	provide() {
		const attrs = { path: 'path', title: 'title', child: 'child' };
		return {
			keys: {
				...attrs,
				...this.keys,
			},
		};
	},
};
</script>
