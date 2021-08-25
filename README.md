# do-element

do-element 是基于 element-ui 的一个二次封装库，在请使用必须引入 element-ui 的 js 、css 文件。着重对 form 组件、table 组件、upload 组件进行了封装

### [View Document](https://ryemail.github.io/do-element/zh/component/guide/package.html)

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用

```js
npm install do-element

// or

yarn add do-element
```

### CDN 引入

目前可以通过 [unpkg.com/do-element](https://unpkg.com/do-element/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用

```html
<!-- 引入样式 -->
<link
	rel="stylesheet"
	href="https://unpkg.com/do-element/lib/theme-chalk/index.css"
/>
<!-- 引入组件库 -->
<script src="https://unpkg.com/do-element/lib/index.js"></script>
```

建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com/)。

### 组件列表

```js
import {
	Link,
	PageTabs,
	Dialog,
	Upload,
	Table,
	Form,
	Container,
	Header,
	Footer,
	Content,
	Menu,
	modal, //方法
	notice, //方法
} from 'do-element';
```

```

```
