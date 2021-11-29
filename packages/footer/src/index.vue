<template>
	<footer class="d-footer">
		青橄榄智慧服务平台 Copyright © 2015-{{ endDate }} Golive All Rights
		Reserved
		<a
			class="d-beian-link"
			target="_blank"
			href="https://beian.miit.gov.cn"
		>
			浙ICP备14020207号-4
		</a>
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
