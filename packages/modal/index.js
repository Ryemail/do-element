import { MessageBox, Notification } from 'element-ui';

const defaultOptions = {
	confirmButtonText: '确定',
	cancelButtonText: '取消',
	dangerouslyUseHTMLString: true,
	customClass: 'd-confirm-box',
	showClose: false,
};

const noticeOptions = {
	title: '',
	message: '',
	customClass: 'd-notice',
	duration: 2000,
	showClose: false,
};

export function modal(options) {
	options = { ...defaultOptions, ...options };

	const icons = {
		question: 'el-icon-question',
	};

	if (options.type) {
		options.iconClass = icons[options.type];
	}

	const { message, title } = options;

	delete options.message;
	delete options.title;

	let html = '<div class="d-modal-title">' + title + '</div>';

	if (typeof message == 'string') {
		html += message;
	} else if (Array.isArray(message)) {
		html += message.map((text) => '<div>' + text + '</div>').join('');
	}

	return MessageBox.confirm(html, '', options);
}

export function notice(options) {
	const defaultOptions = { ...noticeOptions, ...options };

	if ('code' in defaultOptions) {
		if (!defaultOptions.title) {
			defaultOptions.title =
				options.code === 200 ? '操作成功！' : '操作失败！';
		}

		defaultOptions.type = options.code === 200 ? 'success' : 'warning';
	}

	const notify = Notification(defaultOptions);

	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => {
			clearTimeout(timer);

			if (!('code' in defaultOptions)) resolve(notify);

			if (defaultOptions.code === 200) resolve(notify);

			reject(notify);
		}, defaultOptions.duration);
	});
}
