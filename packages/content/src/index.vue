<template>
	<div class="d-content">
		<d-page-title
			v-if="!exclude.includes($route.name)"
			:show-back="showBack"
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
		showBack: {
			type: Boolean,
			default: false,
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
