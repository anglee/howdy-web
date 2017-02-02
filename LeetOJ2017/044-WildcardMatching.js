/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

  const memoize = (originalFunc) => {
    const map = new Map();
    return function () {
      //const key = JSON.stringify(arguments);
      const key = `${arguments[0].length}_${arguments[1].length}`; // <------ cool!
      if (map.has(key)) {
        // console.log(`cache hit key=${key}`);
        return map.get(key);
      }
      const ret = originalFunc.apply(null, arguments);
      map.set(key, ret);
      return ret;
    }
  };

  var isMatchI = memoize(function (s, p) {
    if (s.length === 0 && p.length === 0) {
      return true;
    }
    if (s.length !== 0 && p.length === 0) {
      return false;
    }
    if (p[0] !== '*') {
      if (s[0] === p[0] || s.length > 0 && p[0] === '?') {
        return isMatchI(s.substr(1), p.substr(1));
      }
    } else {
      const newP = p.substr(1);

      if (s.length === 0) {
        return isMatchI('', newP);
      }
      for (let i = 0; i < s.length; ++i) {
        if (isMatchI(s.substr(i), newP)) {
          return true;
        }
      }
      if (isMatchI('', newP)) {
        return true;
      }
    }

    return false;
  });

  return isMatchI(s, p);
};

export default isMatch;
