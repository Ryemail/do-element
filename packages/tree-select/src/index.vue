<template>
	<el-popover
		placement="bottom-start"
		trigger="click"
		transition="el-zoom-in-top"
		popper-class="d-tree-select"
		:arrow-offset="arrowOffset"
		:width="popover.width"
		@show="onPopoverTogde(true)"
		@hide="onPopoverTogde(false)"
		v-model="popover.visible"
	>
		<div
			slot="reference"
			ref="reference"
			class="d-tree-reference"
			:class="{
				'is-arrow': isArrow,
				'is-focus': isFocus,
				'is-query': treeQuery,
			}"
		>
			<el-input
				v-model="treeQuery"
				ref="input"
				:readonly="!filter"
				@focus="onFocus"
				@blur="onBlur"
			>
				<i
					slot="suffix"
					class="el-input__icon"
					:class="[
						treeValue
							? 'el-icon-circle-close'
							: 'el-icon-arrow-down',
					]"
					@click.stop="onIconClick"
				>
				</i>
			</el-input>

			<div
				v-if="!treeValue"
				@click="onInputFocus"
				class="d-label-placeholder"
			>
				{{ placeholder }}
			</div>

			<div v-if="treeValue" @click="onInputFocus" class="d-label-value">
				{{ treeValue }}
			</div>
		</div>

		<el-tree
			ref="tree"
			:indent="indent"
			v-bind="$attrs"
			:filter="filter"
			:accordion="accordion"
			:node-key="nodeKey"
			:highlight-current="highlightCurrent"
			:filter-node-method="onFilterNode"
			:default-expanded-keys="defaultExpandedKeys"
			@node-click="onNodeClick"
		/>
	</el-popover>
</template>

<script>
export default {
	name: 'DTreeSelect',
	props: {
		placeholder: {
			type: String,
			default: '',
		},
		indent: {
			type: Number,
			default: 30,
		},
		arrowOffset: {
			type: Number,
			default: 35,
		},
		accordion: {
			type: Boolean,
			default: true,
		},
		highlightCurrent: {
			type: Boolean,
			default: true,
		},
		filter: {
			type: Boolean,
			default: false,
		},
		nodeKey: {
			type: String,
			default: 'id',
		},
		value: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			isFocus: false,
			isArrow: false,
			treeValue: '',
			treeQuery: '',
			selected: this.value,
			defaultExpandedKeys: [],
			popover: {
				visible: false,
				width: 100,
			},
		};
	},
	watch: {
		treeQuery(value) {
			this.$refs.tree.filter(value);
		},
		value: {
			handler(value) {
				this.selected = value;

				this.$nextTick(() => {
					const ele = this.$refs.tree;

					const lastKey = this.selected.slice(-1)[0];

					ele.setCurrentKey(lastKey ? lastKey : null);

					this.defaultExpandedKeys = this.selected;

					if (!lastKey) {
						const child = ele.$children;

						child.map((item) => (item.expanded = false));
					}
				});
			},
			deep: true,
		},
		selected: {
			handler(value) {
				this.$nextTick(() => {
					const ele = this.$refs.tree;

					const nodes = value.map((key) => ele.getNode(key));

					this.treeValue = nodes
						.map((value) => value && value.label)
						.join(' / ');

					this.$emit('input', value);
				});
			},
			deep: true,
			immediate: true,
		},
	},
	created() {
		this.getPopoverWidth();
	},
	methods: {
		getPopoverWidth() {
			this.$nextTick(() => {
				const ele = this.$refs.reference;

				this.popover.width = ele.getBoundingClientRect().width;
			});
		},

		onNodeClick(data, node) {
			let current = node;

			const nodes = [current];

			while (current.parent) {
				current = current.parent;

				if (current.parent !== null) {
					nodes.push(current);
				}
			}
			this.selected = nodes.reverse().map((val) => val.key);

			this.treeQuery = '';
			this.popover.visible = false;
		},

		onFilterNode(value, data, node) {
			if (!value) return true;

			let parentNode = node.parent;
			let labels = [node.label];
			let level = 1;

			while (level < node.level) {
				if (parentNode) {
					labels = [...labels, parentNode.label];
					parentNode = parentNode.parent;
				}
				level++;
			}

			return labels.some((label) => label.indexOf(value) !== -1);
		},

		onIconClick() {
			if (this.treeValue) {
				this.treeValue = '';
				this.$emit('input', []);
			}
		},

		// 使搜索框获取焦点
		onInputFocus() {
			const el = this.$refs.input;
			el.focus();
		},

		onFocus() {
			this.isFocus = true;
		},

		onBlur() {
			this.isFocus = false;
		},

		onPopoverTogde(show) {
			this.isArrow = show;

			if (show === false) {
				this.treeQuery = '';
			}
		},
	},
};
</script>
