import _typeof from "@babel/runtime/helpers/typeof";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.map.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/web.dom-collections.for-each.js";
import { checkType } from './type';
export function clone(data) {
  var isType = checkType(data);

  if (isType('array')) {
    return data.map(function (o) {
      return _typeof(o) === 'object' ? clone(o) : o;
    });
  }

  if (isType('object')) {
    var result = {};

    for (var key in data) {
      result[key] = _typeof(data[key]) === 'object' ? clone(data[key]) : data[key];
    }

    return result;
  }

  if (isType('function')) {
    return new Function('return ' + data.toString())();
  }

  if (isType('map')) {
    var map = new Map();
    data.keys().forEach(function (key) {
      map.set(key, data.get(key));
    });
    return map;
  }

  return data;
}