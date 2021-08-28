<template>
	<div>
		<d-steps :active="active" :show-current="false" :simple="false">
			<d-step title="批次信息">
				<div><p>563563</p></div>
			</d-step>
			<d-step title="人员管理">
				<div><p>563563</p></div>
			</d-step>
			<d-step title="完成了">436363</d-step>
		</d-steps>
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
