import _ from 'lodash';
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi0 = function(str) {
  return parseInt(str);
};

const digitMap = (() => {
  const map = {};
  _.range(10).forEach(it => {
    map[it] = it;
  });
  return map;
})();

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim();

  if (str.startsWith('+')) {
    if (str.length > 1 && digitMap[str[1]] != null) {
      return myAtoi(str.substring(1));
    } else {
      return 0;
    }
  }
  if (str.startsWith('-')) {
    if (str.length > 1 && digitMap[str[1]] != null) {
      return -1 * myAtoi(str.substring(1));
    } else {
      return 0;
    }
  }
  let ret = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const digit = digitMap[ch];
    if (digit == null) {
      break;
    }
    ret = ret * 10 + digit;
  }
  return ret;
};

var solutionForLeetCodeOJ = (str) => {
  let ret = myAtoi(str);
  if (ret >= Math.pow(2,31)) {
    ret = Math.pow(2,31) - 1;
  }
  if (ret < -1 * Math.pow(2,31)) {
    ret = -1 * Math.pow(2,31);
  }
  return ret;
};

export default myAtoi;