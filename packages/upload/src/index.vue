<template>
	<div>
		<el-upload
			v-bind="$attrs"
			v-on="$listeners"
			:accept="fileAccept"
			:file-list="imageList"
			:show-file-list="showFile"
			:on-success="onSuccess"
			:on-error="onError"
			:on-preview="onPictureCardPreview"
			:on-remove="onRemove"
			class="d-upload"
		>
			<slot></slot>
			<span v-if="$scopedSlots.image">
				<slot name="image" />
			</span>
			<div v-else-if="accept === 'image'" class="d-upload-inner">
				<i class="d-icon-addimage"></i>
				<template v-if="imageUrl">
					<img class="d-image-url" :src="imageUrl" />
					<div class="d-new-upload">重新上传</div>
				</template>
			</div>

			<slot name="tip"></slot>
		</el-upload>
		<el-dialog :visible.sync="dialog.visible" append-to-body>
			<img width="100%" :src="dialog.image" alt="" />
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'DUpload',
	props: {
		value: {
			type: [Array, String],
		},
		accept: {
			type: String,
			default: '',
		},
		showFileList: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			accepts: {
				video: 'video/*',
				audio: 'audio/*',
				excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
				word: '.doc,.docx,.wps',
				pdf: '.pdf',
				image: 'image/*',
			},
			dialog: {
				visible: false,
				image: '',
			},
			imageUrl: '',
			imageList: [],
		};
	},
	computed: {
		fileAccept() {
			const { accepts, accept } = this;

			return accepts[accept] ? accepts[accept] : accept;
		},
		showFile() {
			if (this.$attrs['list-type'] === 'picture-card') {
				return true;
			}
			return this.showFileList;
		},
	},
	watch: {
		value: {
			handler(value) {
				if (value instanceof Array) {
					this.imageList = value.map((val, index) => ({
						name: index,
						url: val,
					}));
				} else {
					this.imageUrl = value;
				}
			},
			deep: true,
			immediate: true,
		},
	},
	methods: {
		onSuccess(response, file) {
			const { accept, $attrs } = this;

			if (accept === 'image') {
				const imageUrl = URL.createObjectURL(file.raw);
				const imageItem = imageUrl;

				if ($attrs['list-type'] !== 'picture-card') {
					this.imageUrl = imageItem;

					this.$emit('input', this.imageUrl);
				} else {
					this.$emit('input', [
						...this.imageList.map((val) => val.url),
						imageItem,
					]);
				}

				return;
			}
			// 其他格式文件传递
			this.$emit('input', response);
		},
		onError() {
			this.$notice({
				type: 'warning',
				title: '上传失败',
				message: '请检查网络情况是否良好',
			});
		},

		onPictureCardPreview(file) {
			if (file.url) {
				this.dialog.image = file.url;
			}
			this.dialog.visible = true;
		},

		onRemove(file, fileList) {
			this.$emit(
				'input',
				fileList.map((val) => val.url)
			);
		},
	},
};
</script>
