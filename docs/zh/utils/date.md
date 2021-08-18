---
pageClass: page-content
lang: zh-CN
---

## Date

### 获取数据

将时间解析为指定格式，此方法第一个参数必须可被 new Date()解析， 第二个参数为格式（如 yyyy-MM-dd hh:mm:ss）

```js
const date = new Date(2021, 8, 18);

dateFormat(date, 'yyyy-MM-dd'); // 输出 2021-08-18

dateFormat(date, 'yyyyn年MM月dd日'); // 输出 2021年08月18日

const d = new Date(2021, 08, 18, 13, 46, 27);
dateFormat(d, 'yyyyn年MM月dd日 hh:mm:ss'); // 输出 2021年08月18日 13:46:27
```
