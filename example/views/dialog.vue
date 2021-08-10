<template>
	<div>
		<div class="module">
			<h3 class="module-title">默认使用</h3>
			<div>
				<el-button @click="visible = true">默认使用</el-button>
			</div>
		</div>

		<div class="module">
			<h3 class="module-title">插槽使用</h3>
			<el-button @click="visible1 = true">插槽使用</el-button>

			<div class="module-tips">
				<h3 class="module-tips-title">温馨提示</h3>
				<ul class="module-tips-content">
					<li>footer 默认是显示两个按钮，使用button属性可传递修改</li>
					<li>footer 使用插槽时，button属性失效</li>
				</ul>
			</div>
		</div>

		<!-- 默认使用 -->
		<d-dialog :visible.sync="visible" title="默认使用">
			<p v-for="item in 10" :key="item">内容区域{{ item }}</p>
		</d-dialog>

		<!-- 插槽使用 -->
		<d-dialog :visible.sync="visible1">
			<div slot="title">插槽使用</div>

			<p v-for="item in 10" :key="item">{{ item }}</p>

			<div slot="footer">
				<el-button @click="visible1 = false">取消</el-button>
			</div>
		</d-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			visible: false,
			visible1: false,
			visible2: false,
		};
	},
	methods: {
		onClick() {
			this.visible2 = true;
		},
	},
};
</script>
