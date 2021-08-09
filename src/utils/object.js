import { checkType } from './type';

// 根据key 解析对象
export function parseKeys(data, keys) {
	if (!data) return null;

	const keyArr = keys.split('.');

	for (let index = 0; index < keyArr.length; index++) {
		const key = keyArr[index];

		data = data[key]; //关键步骤

		const isType = checkType(data);

		if (isType('array') && !data.length) {
			return null;
		}

		if (isType('object') && !Object.keys(data).length) {
			return null;
		}

		if (!data) return null;
	}

	return data;
}

// 解析连个对象值是否相等
export function parseEqual(first, last) {
	const o1keys = Object.keys(first);
	const o2keys = Object.keys(last);

	if (o2keys.length !== o1keys.length) return false;

	for (let i = 0; i < o1keys.length; i++) {
		const key = o1keys[i];
		if (typeof first[key] !== 'object') {
			if (!o2keys.includes(key)) return false;

			if (last[key] !== first[key]) return false;
		} else {
			return parseEqual(first[key], last[key]);
		}
	}

	return true;
}

// 解析url 转为json
export function parseQuery(param = location.url) {
	const startIndex = param.indexOf('?');

	if (startIndex === -1) return '';

	const keywords = param.substring(startIndex + 1);

	const result = {};

	keywords.replace(/([^?&]+)=([^?&]+)/gi, function (a, b, c) {
		result[decodeURIComponent(b)] = decodeURIComponent(c);
	});

	return result;
}

// 解析对象成url 参数
export function parseObject(param) {
	return Object.keys(param)
		.map(function (key) {
			return ''
				.concat(encodeURIComponent(key), '=')
				.concat(encodeURIComponent(param[key]));
		})
		.join('&');
}
