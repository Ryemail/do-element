<template>
	<div class="d-content">
		<d-page-title :backs="backs" :title="title" />

		<slot></slot>
	</div>
</template>

<script>
import DPageTitle from './title.vue';

export default {
	name: 'dContent',
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
	},
};
</script>
