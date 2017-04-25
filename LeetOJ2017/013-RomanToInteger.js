/**
 * @param {string} s
 * @return {number}
 */
var romanToInt0 = function(s) {
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

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const valueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const keys = Object.keys(valueMap);
  const keysIndexMap = keys.reduce((indexMap, key, index) => {
    indexMap[key] = index;
    return indexMap;
  }, {});

  let lastIndex = null;
  let ret = 0;
  // iterate from right to left if a digit has lower index than the last encountered, then it is a negative
  // a key observation is that a negative digit will not locate next to another negative digit,
  // in other words, there is no consecutive negative digits
  const digits = s.split('').reverse();
  digits.forEach((digit) => {
    const index = keysIndexMap[digit];
    if (lastIndex === null || lastIndex <= index) {
      ret += valueMap[digit];
    } else {
      ret -= valueMap[digit];
    }
    if (lastIndex === null || index != lastIndex) {
      lastIndex = index;
    }
  });

  return ret;
};

export default romanToInt;