<template>
	<d-dialog
		v-bind="{ title: '自定义列表显示', ...$attrs }"
		class="d-filter-column-dialog"
		v-on="{ ...$listeners, event: onEvent }"
	>
		<div class="d-filter-colum-left">
			<div class="d-column-title">需显示的字段</div>
			<div class="d-table-checkbox-group">
				<el-checkbox
					v-for="(item, index) in list"
					:key="index"
					:label="item.prop"
					:disabled="item.disabled"
					v-model="item.checked"
					@change="onChange(item)"
				>
					{{ item.label }}
				</el-checkbox>
			</div>
		</div>
		<div class="d-filter-colum-sort">
			<div class="d-column-title">显示顺序</div>
			<ul class="d-filter-colum-ul">
				<li v-for="(item, index) in notSortList" :key="index">
					{{ item.label }}
				</li>
			</ul>
			<ul class="d-filter-colum-ul">
				<transition-group name="d-drag-transition">
					<li
						v-for="item in sortList"
						:key="item.prop"
						@dragstart="onDragstart(item)"
						@dragenter="onDragenter(item)"
						@dragend="onDragend"
						:draggable="true"
						class="d-filter-colum-item"
					>
						<span>{{ item.label }}</span>
						<span class="d-sort-tag"></span>
					</li>
				</transition-group>
			</ul>
		</div>
	</d-dialog>
</template>

<script>
import DDialog from 'packages/dialog';
import { clone } from '@/utils';

export default {
	name: 'DFilterColumn',
	model: {
		event: 'change',
	},
	components: { DDialog },

	props: {
		data: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			oldNum: 0,
			newNum: 0,
			list: clone(this.data),
			checked: [],
			sortList: [],
			notSortList: [],
			visible: true,
		};
	},
	watch: {
		data: {
			handler(val) {
				this.list = clone(val);

				const checkedList = this.list.filter((val) => val.checked);

				this.checked = checkedList.map((val) => val.prop);

				this.sortList = checkedList.filter((val) => val.sort);

				this.notSortList = checkedList.filter((val) => !val.sort);
			},
			immediate: true,
			deep: true,
		},
	},
	methods: {
		onChange(value) {
			const index = this.sortList.findIndex(
				(val) => val.prop === value.prop
			);

			if (value.checked && index <= -1) {
				this.sortList.push(value);
			} else if (index > -1) {
				this.sortList.splice(index, 1);
			}
		},
		// 记录初始信息
		onDragstart: function (value) {
			this.oldNum = value.prop;
		},
		// 做最终操作
		onDragend: function () {
			if (this.oldNum != this.newNum) {
				const propsArray = this.sortList.map((val) => val.prop);
				let oldIndex = propsArray.indexOf(this.oldNum);
				let newIndex = propsArray.indexOf(this.newNum);
				let newItems = [...this.sortList];
				// 删除老的节点
				newItems.splice(oldIndex, 1);
				// 在列表中目标位置增加新的节点

				const currValue = this.sortList.find(
					(val) => val.prop === this.oldNum
				);
				newItems.splice(newIndex, 0, currValue);
				// this.sortList一改变，transition-group就起了作用
				this.sortList = [...newItems];

				const propArray = this.sortList.map((val) => val.prop);

				this.onChange(
					propArray.filter((val) => this.checked.includes(val))
				);
			}
		},
		// 记录移动过程中信息
		onDragenter: function (value) {
			this.newNum = value.prop;
		},
		onEvent(item) {
			if (item.prop === 'submit') {
				this.$emit('confirm', [...this.notSortList, ...this.sortList]);
			}

			if (item.prop === 'cancel') {
				this.$emit('cancel');
			}
		},
	},
};
</script>
