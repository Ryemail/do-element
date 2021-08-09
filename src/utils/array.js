const defaultProps = { id: 'id', pid: 'pid', children: 'children' };

// 数组转tree
export function arrayToTree(items, props = defaultProps) {
	props.id = props.id || 'id';
	props.pid = props.pid || 'pid';
	props.children = props.children || 'children';

	const result = []; // 存放结果集
	const itemMap = {};
	for (const item of items) {
		const id = item[props.id];
		const pid = item[props.pid];

		if (!itemMap[id]) {
			itemMap[id] = {
				[props.children]: [],
			};
		}

		itemMap[id] = {
			...item,
			[props.children]: itemMap[id][props.children],
		};

		const treeItem = itemMap[id];

		if (pid === 0) {
			result.push(treeItem);
		} else {
			if (!itemMap[pid]) {
				itemMap[id] = {
					[props.children]: [],
				};
			}
			itemMap[pid].children.push(treeItem);
		}
	}
	return result;
}
