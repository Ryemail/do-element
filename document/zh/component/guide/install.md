## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用

```js
npm install do-element

// or

yarn add do-element
```

### CDN

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

::: tip
建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com/)。
:::

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
	Timeline,
	TimelineItem,
	Steps,
	Step,
	Statistic,
	StatisticItem,
	Divider,
	modal,
	notice,
	PageTitle,
} from 'do-element';
```

### 全局配置

在引入 DoElement 时，可以传入一个全局配置对象。该对象目前支持 headers 与 moreCount 字段。headers 用于 table 组件 ajax 请求时携带的 headers，moreCount 用于 table 组件操作栏按钮显示的个数配置

```js
import Vue from 'vue';
import DoElement from 'do-element';

Vue.use(DoElement, { headers: { token: 'TOKEN' }, moreCount: 3 });
```
