---
pageClass: page-content
lang: zh-CN
---

## 数值千分位

### thousandth

对传入的数值或字符串数值进行千分位处理

```js
// 只匹配数字
thousandth('12dds34', 'number'); // 输出1234

// 匹配小数并限制到两位
thousandth('12dds34.839232'); //输出 1234.83
```
