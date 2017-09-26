/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let ret = 0;
  for (let i = 0; i < s.length; ++i) {
    let len = 0;
    while (i - len >= 0 && i + len < s.length && s[i - len] === s[i + len]) {
      ret++;
      len++;
    }
  }
  for (let i = 0.5; i < s.length - 1; ++i) {
    let len = 0.5;
    while (i - len >= 0 && i + len < s.length && s[i - len] === s[i + len]) {
      ret++;
      len++;
    }
  }
  return ret;
};

export default countSubstrings;