import { checkType } from './type';

export function clone(data) {
	const isType = checkType(data);

	if (isType('array')) {
		return data.map((o) => (typeof o === 'object' ? clone(o) : o));
	}

	if (isType('object')) {
		const result = {};

		for (const key in data) {
			result[key] =
				typeof data[key] === 'object' ? clone(data[key]) : data[key];
		}
		return result;
	}

	if (isType('function')) {
		return new Function('return ' + data.toString())();
	}

	if (isType('map')) {
		const map = new Map();

		data.keys().forEach((key) => {
			map.set(key, data.get(key));
		});

		return map;
	}

	return data;
}
