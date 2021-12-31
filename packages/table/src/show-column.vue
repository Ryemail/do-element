<template>
	<el-popover placement="bottom-end" class="dd" width="100" trigger="hover">
		<svg
			slot="reference"
			viewBox="0 0 1024 1024"
			width="16"
			height="16"
			class="d-table-choose-icon"
		>
			<path
				d="M3.42898915 64.07163449H136.26026667v126.46991644H3.42898915v-126.46991644zM3.42898915 443.48720925H136.26026667v126.46991644H3.42898915v-126.46991644zM3.42898915 822.89695858H136.26026667v126.47574187H3.42898915v-126.47574187zM256.36882205 64.07163449H1015.19997155v126.46991644H256.36882205v-126.46991644zM256.36882205 443.48720925H1015.19997155v126.46991644H256.36882205v-126.46991644zM256.36882205 822.89695858H1015.19997155v126.47574187H256.36882205v-126.47574187z"
				fill="#000000"
			></path>
		</svg>

		<el-checkbox-group
			class="d-table-checkbox-group"
			v-model="checked"
			@change="onChange"
		>
			<!-- 	@dragstart.native="onDragstart(item)"
					@dragenter.native="onDragenter(item)"
					@dragend.native="onDragend"
                    :draggable="true" -->
			<transition-group name="d-drag-transition">
				<el-checkbox
					v-for="item in items"
					:key="item.prop"
					:label="item.prop"
					:disabled="disabledColumn.includes(item.prop)"
				>
					{{ item.label }}
				</el-checkbox>
			</transition-group>
		</el-checkbox-group>
	</el-popover>
</template>

<script>
export default {
	name: 'DShowColumn',
	model: {
		event: 'change',
	},
	props: {
		value: {
			type: Array,
			default: () => [],
		},
		labels: {
			type: Array,
			default: () => [],
		},
		disabledColumn: {
			type: Array,
			default: () => [],
		},
	},
	watch: {
		value: {
			handler(value) {
				this.checked = value.filter((val) => val);
			},
			deep: true,
			immediate: true,
		},
	},
	data() {
		return {
			oldNum: 0,
			newNum: 0,
			items: this.labels,
			checked: this.value,
		};
	},
	methods: {
		onChange(value) {
			this.$emit('change', value);
		},
		// 记录初始信息
		onDragstart: function (value) {
			this.oldNum = value.prop;
		},
		// 做最终操作
		onDragend: function () {
			if (this.oldNum != this.newNum) {
				const propsArray = this.items.map((val) => val.prop);
				let oldIndex = propsArray.indexOf(this.oldNum);
				let newIndex = propsArray.indexOf(this.newNum);
				let newItems = [...this.items];
				// 删除老的节点
				newItems.splice(oldIndex, 1);
				// 在列表中目标位置增加新的节点

				const currValue = this.items.find(
					(val) => val.prop === this.oldNum
				);
				newItems.splice(newIndex, 0, currValue);
				// this.items一改变，transition-group就起了作用
				this.items = [...newItems];

				const propArray = this.items.map((val) => val.prop);

				this.onChange(
					propArray.filter((val) => this.checked.includes(val))
				);
			}
		},
		// 记录移动过程中信息
		onDragenter: function (value) {
			this.newNum = value.prop;
		},
	},
};
</script>
