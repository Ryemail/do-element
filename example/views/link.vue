<template>
	<div>
		<div class="module">
			<h3 class="module-title">主题色</h3>
			<div>
				<gl-link icon="zhu" type="danger">危险</gl-link>
				<gl-link icon="kaimenjilu" type="primary">主色</gl-link>
				<gl-link icon="warning" type="warning">警告</gl-link>
				<gl-link icon="select" type="success">成功</gl-link>
			</div>
		</div>
		<div class="module">
			<h3 class="module-title">禁用</h3>
			<gl-link icon="select" disabled type="success">禁用状态</gl-link>
		</div>

		<div class="module">
			<h3 class="module-title">点击事件</h3>
			<gl-link icon="zengjia" @click="onClick" type="success">
				点击事件
			</gl-link>
		</div>

		<div class="module">
			<h3 class="module-title">路由跳转</h3>
			<gl-link icon="checked" to="/modal" type="success">
				路由跳转
			</gl-link>

			<div class="module-tips">
				<h3 class="module-tips-title">温馨提示</h3>
				<ul class="module-tips-content">
					<li>点击事件不可与tos属性同时存在，同时存在时取点击事件</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		onClick() {
			alert('点击事件');
		},
	},
};
</script>
