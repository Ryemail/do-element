import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.match.js";
import "core-js/modules/es.string.replace.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.string.pad-end.js";
import "core-js/modules/es.array.concat.js";
export function thousandth(value) {
  var groupSeparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  var decimalSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  var precision = arguments.length > 3 ? arguments[3] : undefined;
  var val = String(value);
  var cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);

  if (!cells || val === '-') {
    return val;
  }

  var negative = cells[1];
  var int = cells[2] || '0';
  var decimal = cells[4] || '';
  int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
  var num = typeof precision === 'number' ? precision : decimal.length;
  decimal = decimal.padEnd(num, '0').slice(0, num);

  if (decimal) {
    decimal = "".concat(decimalSeparator).concat(decimal);
  }

  return decimal ? "".concat(negative).concat(int).concat(decimal) : "".concat(negative).concat(int);
}