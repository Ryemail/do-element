---
pageClass: page-content
lang: zh-CN
---

## Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<d-container>`：外层容器。

`<d-header>`：顶栏。

`<d-menu>`：侧边栏。

`<d-footer>`：底栏。

### 实例

::: demo

```html
<template>
	<el-scrollbar id="layout">
		<d-container>
			<d-header
				logo-name="工作台"
				title="个人中心"
				logo="https://img1.baidu.com/it/u=3254254623,2492769581&fm=26&fmt=auto&gp=0.jpg"
			/>

			<main class="d-main">
				<d-menu :default-active="active" :menus="menus" />

				<d-content title="测试">
					<div class="d-router-view">
						<p v-for="item in 100" :key="item">{{ item }}</p>
					</div>
				</d-content>
			</main>

			<d-footer />
		</d-container>
	</el-scrollbar>
</template>

<script>
	export default {
		data() {
			return {
				active: 'link',
				menus: [
					{ en_name: 'link', name: 'Link' },
					{ en_name: 'dialog', name: 'Dialog' },
					{ en_name: 'modal', name: 'Modal' },
					{ en_name: 'table', name: 'Table' },
					{ en_name: 'form', name: 'Form' },
					{ en_name: 'upload', name: 'Upload' },
					{ en_name: 'tabs', name: 'Tabs' },
				],
			};
		},
	};
</script>

<style>
	#layout {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		height: 500px;
	}
	#layout .el-scrollbar__wrap {
		overflow-x: hidden;
	}
	.el-scrollbar__view {
		height: 100%;
	}
	.el-scrollbar__bar.is-horizontal {
		height: 0;
	}
	.vuepress-plugin-demo-block__app {
		position: relative;
	}
	.d-container .d-main,
	.d-container .d-header .d-header-content {
		max-width: 100%;
		min-width: 100%;
	}
	.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__display {
		max-height: 600px;
	}
</style>
```

<= delete spaces here
:::

### Header Attributes

| 参数      | 说明            | 类型   | 默认值 |
| :-------- | :-------------- | :----- | :----- |
| logo      | 左上角展示 logo | string | \_     |
| logo-name | 左上角展示文字  | string | \_     |
| title     | 标题            | string | \_     |

### Content Attributes

| 参数  | 说明                             | 类型     | 默认值 |
| :---- | :------------------------------- | :------- | :----- |
| backs | 需要添加返回按钮的 page 名称集合 | string[] | []     |
| title | Content 标题                     | string   | \_     |

### Content Attributes

| 参数  | 说明                             | 类型     | 默认值 |
| :---- | :------------------------------- | :------- | :----- |
| backs | 需要添加返回按钮的 page 名称集合 | string[] | []     |
| title | Content 标题                     | string   | \_     |

### Content Attributes

| 参数           | 说明               | 类型     | 默认值 |
| :------------- | :----------------- | :------- | :----- |
| default-active | 当前激活的状态名称 | string   | \_     |
| menus          | 导航栏数据         | object[] | []     |
