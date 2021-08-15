<template>
	<div>
		<div class="module">
			<h3 class="module-title">文件上传</h3>
			<div class="uplaod-content">
				<d-upload :action="action" accept="pdf">
					<el-button>只能上传pdf</el-button>
				</d-upload>

				<d-upload :action="action" accept="word">
					<el-button>只能上传word</el-button>
				</d-upload>

				<d-upload :action="action" accept="video">
					<el-button>只能上传Video</el-button>
				</d-upload>

				<d-upload :action="action" accept="audio">
					<el-button>只能上传Audio</el-button>
				</d-upload>

				<d-upload :action="action" accept="excel">
					<el-button>只能上传excel</el-button>
				</d-upload>
			</div>
		</div>
		<div class="module">
			<h3 class="module-title">上传图片</h3>
			<div class="module-content">
				<div>
					<d-upload
						:action="action"
						accept="image"
						v-model="image.value1"
					>
						<div slot="tip" style="font-size: 12px">
							只能上传.png、.jpg格式
						</div>
					</d-upload>
					<div>{{ image.value1 }}</div>
				</div>

				<div>
					<d-upload
						:action="action"
						accept="image"
						v-model="image.value2"
					>
						<el-button icon="el-icon-plus" slot="image">
							自定义图片上传样式
						</el-button>
					</d-upload>
					<div>{{ image.value2 }}</div>
				</div>
			</div>
		</div>

		<div class="module">
			<h3 class="module-title">照片墙</h3>
			<d-upload
				:action="action"
				accept="image"
				list-type="picture-card"
				v-model="image.value3"
			>
			</d-upload>
			<div>{{ image.value3 }}</div>
		</div>

		<div class="module">
			<h3 class="module-title">在表单中使用</h3>

			<d-form
				:form="form"
				:label-width="140"
				:columns="columns"
				:rules="rules"
				@event="onEvent"
			>
				<template #upload="{ data }">
					<d-upload
						:action="action"
						accept="image"
						list-type="picture-card"
						v-model="data.images"
					>
					</d-upload>
				</template>
			</d-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				images: [],
			},
			rules: {
				images: [
					{
						type: 'array',
						required: true,
						message: '请上传图片',
						trigger: 'change',
					},
				],
			},
			columns: [
				{
					type: 'slot',
					slot: 'upload',
					showMessage: true,
					prop: 'images',
					label: '上传图片',
				},
			],
			action: 'https://jsonplaceholder.typicode.com/posts/',

			image: {
				value1: '',
				value2: '',
				value3: [
					'https://img0.baidu.com/it/u=742901718,4133898817&fm=26&fmt=auto&gp=0.jpg',
				],
			},
		};
	},
	methods: {
		onClick() {
			alert('点击事件');
		},
		onEvent(item) {
			console.log(item);
		},
	},
};
</script>

<style lang="less" scoped>
.uplaod-content {
	> * {
		margin-bottom: 20px;
	}
}
</style>
