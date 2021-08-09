export function getType(o) {
	const type = Object.prototype.toString.call(o);
	return type.replace(/\[|\]/g, '').split(' ')[1].toLowerCase();
}

// 检测数据类型
export function checkType(data) {
	return function (type) {
		return getType(data) === type.toLowerCase();
	};
}
