<template>
	<div>
		<div class="module">
			<h3 class="module-title">通知 - 正常传参</h3>
			<el-button @click="onNotice('warning')">警告</el-button>
			<el-button @click="onNotice('success')">成功</el-button>
		</div>

		<div class="module">
			<h3 class="module-title">通知 - 传递code</h3>
			<el-button @click="onNoticeCode(200)">200</el-button>
			<el-button @click="onNoticeCode(200)">400</el-button>

			<div class="module-tips">
				<h3 class="module-tips-title">温馨提示</h3>
				<ul class="module-tips-content">
					<li>
						code值200取type=success的样式，否则都是type=warning的样式
					</li>
					<li>
						code存在时，若200，title默认”,操作成功！“，否则默认”操作失败！“
					</li>
				</ul>
			</div>
		</div>

		<div class="module">
			<h3 class="module-title">弹窗确定</h3>
			<el-button @click="onModal('warning')">警告</el-button>
			<el-button @click="onModal('error')">危险</el-button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		onNotice(type) {
			this.$notice({
				type,
				message: '测试弹窗类型',
				title: '正常传参',
			}).then((notice) => {
				console.log(notice);
			});
		},
		onNoticeCode(code) {
			this.$notice({
				code,
				message: '测试弹窗类型',
			}).then((notice) => {
				console.log(notice);
			});
		},

		onModal(type) {
			this.$modal({
				type,
				message: '555555555555',
				title: '45545',
			});
		},
	},
};
</script>
