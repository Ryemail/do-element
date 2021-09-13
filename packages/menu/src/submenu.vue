<template>
	<div class="d-submenu">
		<el-submenu
			v-if="item[keys.child]"
			:index="item[keys.path]"
			:route="{ name: item[keys.path] }"
		>
			<template slot="title">
				<span slot="title">{{ item[keys.title] }}</span>
			</template>

			<d-submenu
				v-for="item in item[keys.child]"
				:key="item[keys.path]"
				:item="item"
			/>
		</el-submenu>

		<el-menu-item
			v-else
			:index="item[keys.path]"
			:route="{ name: item[keys.path] }"
		>
			<span slot="title">{{ item[keys.title] }}</span>
		</el-menu-item>
	</div>
</template>

<script>
export default {
	name: 'DSubmenu',
	inject: ['keys'],
	props: {
		item: {
			type: Object,
			default: () => {},
		},
	},
};
</script>
