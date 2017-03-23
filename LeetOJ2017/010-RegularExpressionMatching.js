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
        isMatch(s, p.substr(2)) || (
          (s.length >= 1) && (
            isMatch(s.substr(1), p.substr(2)) || isMatch(s.substr(1), p)
          )
        )
      );
    } else {
      return (
        isMatch(s, p.substr(2)) || (
          (s.length >= 1 && s[0] === p[0]) && (
            isMatch(s.substr(1), p.substr(2)) || isMatch(s.substr(1), p)
          )
        )
      );
    }
  } else {
    if (p[0] === '.') {
      return s.length >= 1 && isMatch(s.substr(1), p.substr(1));
    } else {
      return s.length >= 1 && s[0] === p[0] && isMatch(s.substr(1), p.substr(1));
    }
  }
};


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

export default isMatch;