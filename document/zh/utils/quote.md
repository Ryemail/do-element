---
pageClass: page-content
lang: zh-CN
---

## 内置工具

do-element 内置了对 `Object、Array、URL` 等数据的常用处理方法，包含一下方法：

```js
import {
	arrayToTree, // 一维数组转Tree结构
	dateFormat, // 时间格式化
	formatNumber, // 数字格式化
	getType, // 获取数据类型
	checkType, // 判断数据类型
	parseEqual, // 判断两个对象的值是否相等
	parseKeys, //根据key获取深层次对象值
	parseObject, // 将object转化为 & 拼接的字符串
	parseQuery, // 解析 url,将链接参数转化成 object
	clone, //对象进行深度克隆
	thousandth, // 数值千分位处理
} from 'do-element/src/utils';

parseKeys(data, 'child.name.age'); // 输入 44
```
