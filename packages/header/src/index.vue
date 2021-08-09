<template>
	<header class="d-header">
		<div class="d-header-content">
			<el-link class="d-logo" :underline="false">
				<el-image class="d-logo-image" :src="header.logo" />
				<span style="margin: 0 4px 0 8px">{{ header.name }}</span>
				<i class="el-icon-arrow-right"></i>
			</el-link>
			<div class="d-header-titile">{{ header.title }}</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'DHeader',
	props: {
		header: {
			type: Object,
			default() {
				return {
					title: '',
					name: '工作台',
					logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAABOFBMVEUAAABOxMRSyL9Ox8FPyL9QycBPyMBQyMBOyL9PyL9Pyb9PyL9PyL5PyL9QyL9RyL9SyMBSycBTycBUycBUycFay8Nby8NczMNezMRfzcRjzsZlzsdoz8hq0Mhu0cpv0spw0st108x21M181c991s+L2tSN29WS3NeW3diW3tiX3tiY3tmZ39mb4Nqd4Nuf4Nuf4dyg4dyh4dyk4t2l496o49+o5N+p5N+p5OCq5OCs5OCt5eGv5uKw5uKx5uOy5uKz5+O56eW76ea86ea86ua96ua96ue+6ufA6+jE7OnH7erI7evK7uvQ8O3S8O7S8e/T8e/U8e/h9fTj9vTk9vXo9/bt+fju+fju+fnv+vn0+/r0+/v1+/v1/Pv2/Pv2/Pz3/Pz4/Pz6/f37/f38/v39/v7+/v7////zKiLzAAAADXRSTlMAGhxOa22atuTy+Pv9Q6NETwAAAXRJREFUOMuVVdXwjAQDFB6UKLgieJ9I16IRfFW0HpfURSRigfN//8HJi0NeY8CcT5sp828ZJvZXQBcBCVFjUAOEVWRgoBHQNahD3Q50NSENNgGWsjThKOwLaLhxj4dNETl7BXQYEdoNC8ZdoFM/l3vJtKDQOJe+4Y8NjjAfZaAwnjy6geXNnoIW3zB9dsJtqAA1aOj5Y/t5Rt8AuEWvk9ny5+T3ooKmBcX1hiJeTyT/D0lZOT1kTkE2KbWvpNWdTdtD1O2ZrMMmShmrztPVDAshyzgZIsIojv3UcxV3eMr8VZRCh/0N0W9m/YObBXBY9t6Rui7aNQRQu/4Mu4ngtN756Zpzk7ReDDHLfxXJHLcEj6ihj0VczWaeMY3ceTecEMEoelzBTE744oKxpdD5v0u0zqkMV4htiQoW+VsaRpcGyfRoAafEZIocQZzpVLNp67dUnlYyb7xpSJUdELlK9QIQi0l1pxCbS42MMRGj9gQ6zYO/wBX3Gr6q3dTcwAAAABJRU5ErkJggg==',
				};
			},
		},
	},
};
</script>
