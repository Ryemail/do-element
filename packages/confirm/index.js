import { MessageBox } from 'element-ui';

const defaultOptions = {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    dangerouslyUseHTMLString: true,
    type: 'warning',
    customClass: 'do-confirm-box',
};
export default function Confirm({
    message,
    title = '提示',
    options = defaultOptions,
}) {
    let msg = '';
    if (typeof message == 'string') {
        msg = message;
    } else if (Array.isArray(message)) {
        msg = message.map((text) => '<div>' + text + '</div>').join('');
    }

    return new Promise((resolve, reject) => {
        MessageBox.confirm(msg, title, options)
            .then(resolve)
            .catch(reject);
    });
}
