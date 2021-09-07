export function getRow(target) {
	while (target.className.indexOf('el-table__row') == -1) {
		target = target.parentNode;
	}
	return target;
}
