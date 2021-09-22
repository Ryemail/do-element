import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.split.js";
import "core-js/modules/es.string.replace.js";
export function getType(o) {
  var type = Object.prototype.toString.call(o);
  return type.replace(/\[|\]/g, '').split(' ')[1].toLowerCase();
} // 检测数据类型

export function checkType(data) {
  return function (type) {
    return getType(data) === type.toLowerCase();
  };
}