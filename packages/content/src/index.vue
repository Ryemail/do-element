<template>
	<div class="d-content">
		<d-page-title
			v-if="!exclude.includes($route.name)"
			:backs="backs"
			:title="title"
		/>
		<transition name="fade-transform" mode="out-in">
			<slot></slot>
		</transition>
	</div>
</template>

<script>
import DPageTitle from './title.vue';

export default {
	name: 'DContent',
	components: { DPageTitle },
	props: {
		backs: {
			type: Array,
			default: () => [],
		},
		title: {
			type: String,
			default: () => '',
		},
		exclude: {
			type: Array,
			default: () => [],
		},
	},
};
</script>
