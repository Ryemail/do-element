---
pageClass: page-content
lang: zh-CN
---

## Obejct

### parseKeys

根据传入的 key 字符串获取嵌套的 object 的属性值 ， 获取不到返回 null

```js
const data = { child: { name: { age: 44 } } };

parseKeys(data, 'child.name.age'); // 输入 44
```

### parseEqual

判断两个对象的值是否相等

```js
parseEqual({ name: 'zh' }, { name: 'ruanyao' }); // 输出 false
parseEqual({ name: 'zh' }, { name: 'zh' }); // 输出 true
```

####

### parseQuery

解析 url,将链接参数转化成 object

```js
const url = 'https://www.baidu.com/s?name=ruanyao&age=24&sex=男';

parseQuery(url); // 输出 { name:'ruanyao',age:24,sex:'男' }
```

####

### parseObject

将 object 转化为 url 参数

```js
const param = { name: 'ruanyao', age: 24, sex: '男' };

parseObject(param); // 输出 name=ruanyao&age=24&sex=男
```

####

### clone

对数据进行深度克隆

```js
const param = { name: 'ruanyao', age: 24, sex: '男' };

clone(param);
```

####

### getType

返回传入数据的类型

```js
const param = { name: 'ruanyao', age: 24, sex: '男' };

getType(param); // 输出 object

getType(333); // 输出 number
```

### checkType

检测传入的参数是否是指定的类型

```js
const param = { name: 'ruanyao', age: 24, sex: '男' };

checkType(param)('object'); // 输出 true

checkType(param)('number'); // 输出 false
```
