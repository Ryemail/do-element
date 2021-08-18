function getError(action, option, xhr) {
	let msg;
	if (xhr.response) {
		msg = `${xhr.response.error || xhr.response}`;
	} else if (xhr.responseText) {
		msg = `${xhr.responseText}`;
	} else {
		msg = `fail to ${option.method} ${action} ${xhr.status}`;
	}

	const err = new Error(msg);
	err.status = xhr.status;
	err.url = action;
	err.method = option.method;
	return err;
}

function getBody(xhr) {
	const text = xhr.responseText || xhr.response;
	if (!text) {
		return text;
	}

	try {
		return JSON.parse(text);
	} catch (e) {
		return text;
	}
}

export function getTable(option) {
	return new Promise((resolve, reject) => {
		if (typeof XMLHttpRequest === 'undefined') {
			return;
		}

		const xhr = new XMLHttpRequest();
		const method = option.method ? option.method.toLowerCase() : 'get';
		let action = option.url;

		const formData = [];

		for (let key in option.data) {
			formData.push(key + '=' + option.data[key]);
		}

		if (formData.length) {
			action = option.url + '?' + formData.join('&');
		}

		xhr.onerror = function error(e) {
			reject(e);
		};

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(getBody(xhr));
				} else {
					reject(getError(action, option, xhr));
				}
			}
		};

		xhr.open(method, action, true);

		if (option.withCredentials && 'withCredentials' in xhr) {
			xhr.withCredentials = true;
		}

		const headers = option.headers;

		for (let item in headers) {
			if (headers.hasOwnProperty(item) && headers[item] !== null) {
				xhr.setRequestHeader(item, headers[item]);
			}
		}

		xhr.send(option.method === 'get' ? null : formData);
		return xhr;
	});
}
