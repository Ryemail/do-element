export const cellRender = {
    functional: true,
    props: {
        index: Number,
        row: Object,
        render: Function,
    },
    render(h, ctx) {
        const { index, row, render } = ctx.props;
        return render(h, { index, row });
    },
};

export function getType(o) {
    const type = Object.prototype.toString.call(o);
    return type
        .replace(/\[|\]/g, '')
        .split(' ')[1]
        .toLowerCase();
}

export function checkType(data) {
    return function(type) {
        return getType(data) === type.toLowerCase();
    };
}

// 解析keys 获取数据
export function levelData(keys, data, defaultValue = null) {
    if (!data) return defaultValue;

    const keyArr = keys.split('.');

    for (let index = 0; index < keyArr.length; index++) {
        const key = keyArr[index];

        data = data[key]; //关键步骤

        const isType = checkType(data);

        if (isType('array') && !data.length) {
            return defaultValue;
        }

        if (isType('object') && !Object.keys(data).length) {
            return defaultValue;
        }

        if (!data) return defaultValue;
    }

    return data;
}

// 格式化数字
export function formatNumber(value, type) {
    //  type number digit
    if (type === 'number') return (value = value.replace(/^(0+)|[^\d]+/g, ''));

    value = value.replace(/[^\d.]/g, ''); //清除"数字"和"."以外的字符
    value = value.replace(/^\./g, ''); //验证第一个字符是数字
    value = value.replace(/\.{2,}/g, ''); //只保留第一个, 清除多余的
    value = value
        .replace('.', '$#$')
        .replace(/\./g, '')
        .replace('$#$', '.');
    value = value.replace(/^(-)*(\d+)\.(\d{2}).*$/, '$1$2.$3');

    return value;
}

// 对比两个JSON值是否相等
export function ifCompare(object1, object2) {
    const o1keys = Object.keys(object1);
    const o2keys = Object.keys(object2);

    if (o2keys.length !== o1keys.length) return false;

    for (let i = 0; i < o1keys.length; i++) {
        let key = o1keys[i];
        if (typeof object1[key] !== 'object') {
            if (!o2keys.includes(key)) return false;

            if (object2[key] !== object1[key]) return false;
        } else {
            return ifCompare(object1[key], object2[key]);
        }
    }

    return true;
}

// 时间格式化
export function dateFormat(times, fmt = 'yyyy-MM-dd') {
    const d = new Date(times);

    const o = {
        'M+': d.getMonth() + 1, //月份
        'd+': d.getDate(), //日
        'h+': d.getHours(), //小时
        'm+': d.getMinutes(), //分
        's+': d.getSeconds(), //秒
        'q+': Math.floor((d.getMonth() + 3) / 3), //季度
    };

    if (/(y+)/g.test(fmt))
        fmt = fmt.replace(
            RegExp.$1,
            `${d.getFullYear()}`.substr(4 - RegExp.$1.length)
        );

    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                    ? `${o[k]}`
                    : `00${o[k]}`.substr(`${o[k]}`.length)
            );
        }
    }

    return fmt;
}
