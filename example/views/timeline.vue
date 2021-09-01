<template>
	<div>
		<d-timeline :left-width="100">
			<d-timeline-item color="blue" :size="10">
				<template>千江有水千江月</template>
			</d-timeline-item>
			<d-timeline-item color="red" icon="el-icon-eleme" :size="16">
				<template #left>千江有水千江月</template>
				<template>万里乌云万里天</template>
			</d-timeline-item>
			<d-timeline-item color="green" icon="el-icon-platform-eleme">
				<template>6666666</template>
			</d-timeline-item>
			<d-timeline-item>
				<template #dot>
					<img
						width="30px"
						height="30px"
						src="https://img1.baidu.com/it/u=3044261220,3500389775&fm=26&fmt=auto&gp=0.jpg"
					/>
				</template>
				<template>
					66666666666666666666666666666666666
					<br />
					<br />
				</template>
			</d-timeline-item>
		</d-timeline>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>
