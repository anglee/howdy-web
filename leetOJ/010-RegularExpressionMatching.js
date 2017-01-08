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
    if (s[0] === p[0] || p[0] === '.') {
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