import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
import "core-js/modules/es.regexp.constructor.js";
import "core-js/modules/es.regexp.to-string.js";
export function dateFormat(date) {
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd';
  var d = new Date(date);
  var o = {
    'M+': d.getMonth() + 1,
    //月份
    'd+': d.getDate(),
    //日
    'h+': d.getHours(),
    //小时
    'm+': d.getMinutes(),
    //分
    's+': d.getSeconds(),
    //秒
    'q+': Math.floor((d.getMonth() + 3) / 3) //季度

  };
  if (/(y+)/g.test(fmt)) fmt = fmt.replace(RegExp.$1, "".concat(d.getFullYear()).substr(4 - RegExp.$1.length));

  for (var k in o) {
    if (new RegExp("(".concat(k, ")")).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? "".concat(o[k]) : "00".concat(o[k]).substr("".concat(o[k]).length));
    }
  }

  return fmt;
}