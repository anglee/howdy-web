const getDecodeWays = s => {
  if (s.length === 1) {
    if (s === '*') {
      return 9;
    }
    if (s === '0') {
      return 0;
    }
    return 1;
  } else { // s.length === 2
    if (s[0] === '*') {
      if (s[1] === '*') {
        return 15;
      }
      if (
        s[1] === '0' ||
        s[1] === '1' ||
        s[1] === '2' ||
        s[1] === '3' ||
        s[1] === '4' ||
        s[1] === '5' ||
        s[1] === '6'
      ) {
        return 2;
      } else {
        return 1;
      }
    }
    if (s[0] === '1') {
      if (s[1] === '*') { // * can only be 1-9, not 0
        return 9;
      }
      return 1;
    }
    if (s[0] === '2') {
      if (s[1] === '*') { // * can only be 1-9, not 0
        return 6;
      }
      if (
        s[1] === '0' ||
        s[1] === '1' ||
        s[1] === '2' ||
        s[1] === '3' ||
        s[1] === '4' ||
        s[1] === '5' ||
        s[1] === '6'
      ) {
        return 1;
      }
    }
    return 0;
  }
};
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) { // DP
  if (s.length === 0) { return 0; }
  const buffer = Array(s.length).fill(0);
  for (let i = 0; i < s.length; ++i) {
    const prev2 = i - 2 > 0 ? buffer[i - 2] : 1;
    const prev1 = i - 1 > 0 ? buffer[i - 1] : 1;
    if (i - 1 >= 0) {
      buffer[i] += getDecodeWays(s[i - 1] + s[i]) * prev2;
    }
    if (i >= 0) {
      buffer[i] += getDecodeWays(s[i]) * prev1;
    }
    buffer[i] %= (10 ** 9 + 7);
  }
  return buffer[s.length - 1];
};

export default numDecodings;
