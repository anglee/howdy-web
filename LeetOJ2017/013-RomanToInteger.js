/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let ret = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === 'M') {
      ret += 1000;
    } else if (s[i] === 'D') {
      ret += 500;
    } else if (s[i] === 'C') {
      if (s[i+1] === 'M'|| s[i+1] === 'D') {
        ret -= 100;
      } else {
        ret += 100;
      }
    } else if (s[i] === 'L') {
      if (s[i+1] === 'M' || s[i+1] === 'D' || s[i+1] === 'C') {
        ret -= 50;
      } else {
        ret += 50;
      }
    } else if (s[i] === 'X') {
      if (s[i+1] === 'L' || s[i+1] === 'C') {
        ret -= 10;
      } else {
        ret += 10;
      }
    } else if (s[i] === 'V') {
      if (s[i+1] === 'X' || s[i+1] === 'L') {
        ret -= 5;
      } else {
        ret += 5;
      }
    } else if (s[i] === 'I') {
      if (s[i+1] === 'X' || s[i+1] === 'V') {
        ret -= 1;
      } else {
        ret += 1;
      }
    }
  }
  return ret;
};

export default romanToInt;