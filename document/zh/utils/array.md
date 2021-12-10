---
pageClass: page-content
lang: zh-CN
---

## Array

### arrayToTree

根据指定属性将一维数组转为树形结构 ，第一个参数为 json 数组，第二个参数为关联数据匹配的 key 集合，默认为：

```js
// list 为如下示例中list数据格式
arrayToTree(list, { id: 'id', pid: 'pid', children: 'children' });
```

### 示例

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
