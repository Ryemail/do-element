<template>
	<div id="app">
		<router-view name="layout" />
	</div>
</template>

<script>
// import doing from 'do-tool';

export default {
	name: 'App',
	data() {
		return {};
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
