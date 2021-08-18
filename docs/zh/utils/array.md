---
pageClass: page-content
lang: zh-CN
---

## Array

### 获取数据

根据指定属性将一维数组转为树形结构

```js
const list = [
	{ id: 1, pid: 0, name: '一级' },
	{ id: 2, pid: 1, name: '一级1' },
	{ id: 3, pid: 1, name: '一级2' },
	{ id: 4, pid: 2, name: '一级1-1' },
];
arrayToTree(list);
/* 输出[
	{
		id: 1,
		pid: 0,
		name: '一级',
		children: [
			{
				id: 2,
				pid: 1,
				name: '一级1',
				children: [{ id: 4, pid: 2, name: '一级1-1' }],
			},
			{ id: 3, pid: 1, name: '一级2' },
		],
	},
]*/
```

::: danger
数据转化的关键在与 id 与 pid 之间的对应关系，确保`顶级`的 pid 在判断中能为假
:::
