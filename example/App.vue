<template>
	<el-scrollbar id="app">
		<div v-if="$route.name !== 'layout'" class="app-content">
			<el-tabs
				class="gl-left-tabs"
				tab-position="left"
				v-model="active"
				@tab-click="onClick"
			>
				<el-tab-pane
					v-for="item in list"
					:key="item.name"
					:label="item.label"
					:name="item.name"
				>
				</el-tab-pane>
			</el-tabs>
			<router-view class="gl-view"></router-view>
		</div>
		<router-view name="layout" />
	</el-scrollbar>
</template>

<script>
// import doing from 'do-tool';

// console.log(doing.dateFormat(new Date(), 'yyyy-MM-dd'));
// console.log(doing.checkType('')('object'));
// console.log(doing.clone({ name: 'ddd' }));
// console.log(doing);

export default {
	name: 'App',
	data() {
		return {
			list: [
				{ label: 'Link 文字链接', name: 'link' },
				{ label: 'Modal 弹窗提示', name: 'modal' },
				{ label: 'pageTabs 页面tabs', name: 'pageTabs' },
				{ label: 'Dialog 对话框', name: 'dialog' },
				{ label: 'Upload 文件上传', name: 'upload' },
				{ label: 'TreeSelect', name: 'treeselect' },
				{ label: 'Table', name: 'table' },
				{ label: 'Form', name: 'form' },
				{ label: 'layout 布局', name: 'layout' },
				{ label: 'Steps', name: 'steps' },
				{ label: 'TimeLine', name: 'timeline' },
			],
			active: 'link',
		};
	},
	watch: {
		$route(value) {
			this.active = value.matched[0].name;
		},
	},
	methods: {
		onClick(tab) {
			this.$router.push('/' + tab.name);
		},
	},
};
</script>

<style lang="less">
.app-content {
	width: 1140px;
	height: 100%;
	margin: 0 auto;
}
.gl-left-tabs {
	height: 100%;
	float: left;
	padding: 20px 0;
	box-sizing: border-box;
}
.gl-left-tabs .el-tabs__nav {
	width: 200px;
}
.gl-view {
	overflow: hidden;
	padding: 20px 20px 20px 20px;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	height: 100%;
	.el-scrollbar__wrap {
		overflow-x: hidden;
		.el-scrollbar__view {
			height: 100%;
		}
	}
	.el-scrollbar__bar.is-horizontal {
		height: 0;
	}
}
</style>
