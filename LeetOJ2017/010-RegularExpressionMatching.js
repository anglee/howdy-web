/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch0 = function(s, p) {
  if (s.length === 0 && p.length === 0) {
    return true;
  }
  if (p.length === 0) {
    return false;
  }
  if (p.length >= 2 && p[1] === '*') {
    if (p[0] === '.') {
      return (
        isMatch0(s, p.substr(2)) || (
          (s.length >= 1) && (
            isMatch0(s.substr(1), p.substr(2)) || isMatch0(s.substr(1), p)
          )
        )
      );
    } else {
      return (
        isMatch0(s, p.substr(2)) || (
          (s.length >= 1 && s[0] === p[0]) && (
            isMatch0(s.substr(1), p.substr(2)) || isMatch0(s.substr(1), p)
          )
        )
      );
    }
  } else {
    if (p[0] === '.') {
      return s.length >= 1 && isMatch0(s.substr(1), p.substr(1));
    } else {
      return s.length >= 1 && s[0] === p[0] && isMatch0(s.substr(1), p.substr(1));
    }
  }
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p.length === 0) {
    return s.length === 0;
  }
  if (p[1] !== '*') {
    if (s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
      return isMatch(s.substring(1), p.substring(1));
    }
    return false;
  } else {
    if (s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
      return isMatch(s.substring(1), p) || isMatch(s, p.substring(2));
    }
    return isMatch(s, p.substring(2));
  }
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch2 = function(s, p) { // memoize base on keys composed of s.length and p.length
  const memoize = (f) => {
    const resultMap = new Map();
    return (s, p) => {
      const key = `${s.length} ${p.length}`;
      if (resultMap.has(key)) {
        // console.log('hit cache', key);
        return resultMap.get(key);
      }
      const ret = f(s, p);
      resultMap.set(key, ret);
      return ret;
    };
  };

  const isMatchI = memoize(function(s, p) {
    if (p.length === 0) {
      return s.length === 0;
    }
    if (p[1] !== '*') {
      if (s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
        return isMatchI(s.substring(1), p.substring(1));
      }
      return false;
    } else {
      if (s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
        return isMatchI(s.substring(1), p) || isMatchI(s, p.substring(2));
      }
      return isMatchI(s, p.substring(2));
    }
  });
  return isMatchI(s, p);
};

export default isMatch;