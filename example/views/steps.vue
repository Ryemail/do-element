<template>
	<div>
		<do-steps :active="active">
			<do-step title="批次信息">
				<div><p>563563</p></div>
			</do-step>
			<do-step title="人员管理">
				<div><p>563563</p></div>
			</do-step>
			<do-step title="完成了">436363</do-step>
		</do-steps>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 1,
		};
	},
};
</script>
