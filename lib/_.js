const _ = {
  // string
  words: function (string) {
    return string.match(/[a-zA-Z0-9]+/g);
  },
  repeat: function (string, n) {
    var ret = '';
    while (n) {
      ret += string;
      n--;
    }
    return ret;
  },

  // array
  includes: function (array, value) {
    return array.indexOf(value) !== -1;
  },
  groupBy: function (array, fn) {
    var ret = {};
    array.forEach(function(it) {
      if (ret[fn(it)] == null) {
        ret[fn(it)] = [it];
      } else {
        ret[fn(it)].push(it);
      }
    });
    return ret;
  },
  countBy: function (array, fn) {
    var ret = {};
    array.forEach(function(it) {
      if (ret[fn(it)] == null) {
        ret[fn(it)] = 0;
      } else {
        ret[fn(it)]++;
      }
    });
    return ret;
  },
  intersect: function (array1, array2) {
    array1.sort(function (a, b) { return a > b; });
    array2.sort(function (a, b) { return a > b; });
    var i = 0, j = 0;
    var ret = [];
    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        i++;
      } else if (array1[i] > array2[j]) {
        j++;
      } else {
        ret.push(array1[i]);
        i++;
        j++;
      }
    }
    return _.uniq(ret);
  },
  intersect2: function (array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    const ret = new Set();
    set1.forEach((it) => {
      if (set2.has(it)) {
        ret.add(it);
      }
    });
    return Array.from(ret);
  },
  difference: function (array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    const ret = new Set();
    set1.forEach((it) => {
      if (!set2.has(it)) {
        ret.add(it);
      }
    });
    return Array.from(ret);
  },
  uniq: function (array) {
    array.sort();
    var last = null;
    var ret = [];
    array.forEach(function (it) {
      if (it !== last) {
        ret.push(it)
      }
      last = it;
    });
    return ret;
  },

  // object
  forEach: function (obj, fn) {
    for (var prop in obj) {
      fn(obj[prop], prop);
    }
  },
  map: function (obj, fn) {
    var ret = [];
    for (var prop in obj) {
      ret.push(fn(obj[prop], prop));
    }
    return ret;
  },

  // utils
  isEmpty: function (v) {
    // see utils.js
  },
  range: function () {
    // see utils.js
  },
  constant: function (v) {
    return function () {
      return v;
    };
  },
  times: function (n, fn) {
    var ret = [];
    for (var i = 0; i < n; ++i) {
      ret.push(fn(i));
    }
    return ret;
  },

};