## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用

```js
npm install do-element

// or

yarn add do-element
```

### CDN

目前可以通过 [unpkg.com/do-element](https://unpkg.com/do-element) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用

```html
<!-- 引入样式 -->
<link
	rel="stylesheet"
	href="https://unpkg.com/do-element/lib/theme-chalk/index.css"
/>
<!-- 引入组件库 -->
<script src="https://unpkg.com/do-element/lib/index.js"></script>
```

::: tip
建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com/)。
:::
