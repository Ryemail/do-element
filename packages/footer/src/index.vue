<template>
	<footer class="d-footer">
		青橄榄智慧服务平台 Copyright © 2015-{{ endDate }} Golive All Rights
		Reserved 浙ICP备14020207号-4
	</footer>
</template>

<script>
export default {
	name: 'DFooter',
	data() {
		return { endDate: new Date().getFullYear() };
	},
};
</script>
