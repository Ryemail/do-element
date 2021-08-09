<template>
	<div class="d-submenu">
		<el-submenu
			v-if="item[props.child]"
			:index="item[props.name]"
			:route="{ name: item[props.name] }"
		>
			<template slot="title">
				<span slot="title">{{ item[props.name] }}</span>
			</template>

			<go-submenu
				v-for="item in item[props.child]"
				:key="item[props.name]"
				:item="item"
			/>
		</el-submenu>

		<el-menu-item
			v-else
			:index="item[props.name]"
			:route="{ name: item[props.name] }"
		>
			<span slot="title">{{ item[props.name] }}</span>
		</el-menu-item>
	</div>
</template>

<script>
export default {
	name: 'DSubmenu',
	props: {
		item: {
			type: Object,
			default: () => {},
		},
		props: {
			type: Object,
			default() {
				return {
					name: 'en_name',
					child: 'child',
				};
			},
		},
	},
};
</script>
