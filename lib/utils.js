const isArray = (v) => Array.isArray(v);
const isString = (v) => typeof v == 'string';
const isObjectLike = (v) => !!v && typeof v == 'object';

var range1 = function range1(v) {
  var ret = [];
  for (var i = 0; i < v; ++i) {
    ret.push(i);
  }
  return ret;
};

var range2_simple = function range2_simple(start, end) {
  var ret = [];
  for (var i = start; i < end; ++i) {
    ret.push(i);
  }
  return ret;
};

var range2_negative = function range2_negative(start, end) {
  var ret = [];
  var step = start < end ? 1 : -1;
  for (var i = start; start < end ? i < end : i > end; i += step) {
    ret.push(i);
  }
  return ret;
};

var range3_simple = function range3_simple(start, end, step) {
  var ret = [];
  for (var i = start; i < end; i += step) {
    ret.push(i);
  }
  return ret;
};

var repeat = function repeat(string, n) {
  var ret = '';
  while (n) {
    ret += string;
    n--;
  }
  return ret;
};

var constant = function constant (v) {
  return function () {
    return v;
  };
};

var times = function times(n, fn) {
  var ret = [];
  for (var i = 0; i < n; ++i) {
    ret.push(fn(i));
  }
  return ret;
};

//.sort(function(a, b) { return a > b; })
//lines[1].split(' ').map(function(it) { return parseInt(it); });

var forEach = function forEach(obj, fn) {
  for (var prop in obj) {
    fn(obj[prop], prop);
  }
};

var map = function map(obj, fn) {
  var ret = [];
  for (var prop in obj) {
    ret.push(fn(obj[prop], prop));
  }
  return ret;
};

var groupBy = function groupBy(array, fn) {
  var ret = {};
  array.forEach(function(it) {
    if (ret[fn(it)] == null) {
      ret[fn(it)] = [it];
    } else {
      ret[fn(it)].push(it);
    }
  });
  return ret;
};

var countBy = function countBy(array, fn) {
  var ret = {};
  array.forEach(function(it) {
    if (ret[fn(it)] == null) {
      ret[fn(it)] = 0;
    } else {
      ret[fn(it)]++;
    }
  });
  return ret;
};

var intersect = function intersect(arr1, arr2) {
  arr1.sort(function (a, b) { return a > b; });
  arr2.sort(function (a, b) { return a > b; });
  var i = 0, j = 0;
  var ret = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      ret.push(arr1[i]);
      i++;
      j++;
    }
  }
  return uniq(ret);
};

var difference = function difference(set1, set2) {
  const ret = new Set();
  set1.forEach((it) => {
    if (!set2.has(it)) {
      ret.add(it);
    }
  });
  return ret;
};

var xor = function xor(arr1, arr2) {

};

var uniq = function uniq (arr) {
  arr.sort();
  var last = null;
  var ret = [];
  arr.forEach(function (it) {
    if (it !== last) {
      ret.push(it)
    }
    last = it;
  });
  return ret;
};


const utils = {
  includes: function (array, value) {
    return array.indexOf(value) !== -1;
  },
  isArray,
  isString,
  isEmpty: function (v) {
    if (isArray(v) || isString(v)) {
      return !v.length;
    }
    if (isObjectLike(v)) {
      if (v.toString() === '[object Map]'
        || v.toString() === '[object Set]') {
        return !v.size;
      }
    }
    for (var k in v) {
      if (v.hasOwnProperty.call(k)) {
        return false;
      }
    }
    return false;
  },
  repeat,
  range: function() {
    if (arguments.length === 1) {
      return range1(...arguments);
    } else if (arguments.length === 2) {
      return range2_simple(...arguments);
    } else if (arguments.length === 3) {
      return range3_simple(...arguments);
    }
  }
};

export default utils;
