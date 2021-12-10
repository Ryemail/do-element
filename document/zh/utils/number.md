---
pageClass: page-content
lang: zh-CN
---

## Number

### formatNumber

格式化数字，剔除值中非数字的字符,formatNumber()方法第一个参数时 value,第二个参数是类型，默认 digit(`number` or `digit`)

#### 调用

```js
formatNumber(number, 'digit' | 'number');
```

```js
// 只匹配数字
formatNumber('12dds34', 'number'); // 输出1234

// 匹配小数并限制到两位
formatNumber('12dds34.839232'); //输出 1234.83
```
