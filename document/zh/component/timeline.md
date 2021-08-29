---
pageClass: page-content
lang: zh-CN
---

## TimeLine

### 基本使用

内容默认放置在右侧

::: demo

```html
<template>
	<d-timeline>
		<d-timeline-item v-for="(item,key) in items" :key="key">
			<div>{{ item.content }}</div>
			<div>{{ item.timestamp }}</div>
		</d-timeline-item>
	</d-timeline>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						content: 'Event start',
						timestamp: '2018-04-15',
					},
					{
						content: 'Approved',
						timestamp: '2018-04-13',
					},
					{
						content: 'Success',
						timestamp: '2018-04-11',
					},
				],
			};
		},
	};
</script>
```

:::

### Left Content

使用 left 插槽可以在左侧插入内容，使用 left-width 可设置左侧宽度

::: demo

```html
<template>
	<d-timeline :left-width="100">
		<d-timeline-item v-for="(item,key) in items" :key="key">
			<div>{{ item.content }}</div>
			<div slot="left">{{ item.timestamp }}</div>
		</d-timeline-item>
	</d-timeline>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						content: 'Event start',
						timestamp: '2018-04-15',
					},
					{
						content: 'Approved',
						timestamp: '2018-04-13',
					},
					{
						content: 'Success',
						timestamp: '2018-04-11',
					},
				],
			};
		},
	};
</script>
```

:::

### 自定义颜色及 icon

使用 icon 前请先导入 iconfont 库，仅支持 class 引用

::: demo

```html
<template>
	<d-timeline>
		<d-timeline-item color="#FF00FF">自定义颜色</d-timeline-item>
		<d-timeline-item color="#8470FF" icon="d-icon-biaozhu">
			使用icon
		</d-timeline-item>
		<d-timeline-item :size="10">设置size </d-timeline-item>
		<d-timeline-item>
			<template #dot>
				<div>0</div>
			</template>
			自定义节点
		</d-timeline-item>
	</d-timeline>
</template>

<script>
	export default {
		data() {
			return {
				//
			};
		},
	};
</script>
```

:::

### TimeLine Attributes

| 参数       | 说明               | 类型   | 默认值 |
| :--------- | :----------------- | :----- | ------ |
| size       | 节点尺寸           | number | 0      |
| left-width | 设置左侧内容的宽度 | number | 0      |

### TimeLineItem Attributes

| 参数  | 说明      | 类型   | 默认值 |
| :---- | :-------- | :----- | ------ |
| size  | 节点尺寸  | number | 0      |
| color | 节点颜色  | string | \_     |
| icon  | 节点 icon | string | \_     |

### TimeLineItem Slots

| name | 说明       |
| :--- | :--------- |
| \_   | 默认的内容 |
| left | 左侧内容   |
| dot  | 自定义节点 |
