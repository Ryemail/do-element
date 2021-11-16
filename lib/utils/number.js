import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
// 格式化数字
export function formatNumber(value, type) {
  //  type number digit
  if (type === 'number') return value = value.replace(/^(0+)|[^\d]+/g, '');
  value = value.replace(/[^\d.]/g, ''); //清除"数字"和"."以外的字符

  value = value.replace(/^\./g, ''); //验证第一个字符是数字

  value = value.replace(/\.{2,}/g, ''); //只保留第一个, 清除多余的

  value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
  value = value.replace(/^(-)*(\d+)\.(\d{2}).*$/, '$1$2.$3');
  return value;
} // // 匹配字符串url
// /^https?:\/\/[^/]+/