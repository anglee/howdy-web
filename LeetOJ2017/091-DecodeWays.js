const isDoubleDigitsDecodeable = (digit0, digit1) => {
  if (digit0 === '1') { return true; }
  if (digit0 === '2') { return parseInt(digit1) <= 6; }
  return false;
};

const isSingleDigitDecodable = (digit) => {
  return digit !== '0';
};

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings0 = function(s) { // recursive
  const decode = (s) => {
    if (s.length === 0) {
      return 1;
    }
    let ret = 0;
    if (s.length >= 2 && isDoubleDigitsDecodeable(s[0], s[1])) {
      ret += decode(s.substr(2))
    }
    if (s.length >= 1 && isSingleDigitDecodable(s[0])) {
      ret += decode(s.substr(1))
    }
    return ret;
  };
  return s.length === 0 ? 0 : decode(s);
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings1 = function(s) { // DP

  const buffer = [];
  for (let i = 0; i < s.length; i++) {
    buffer.push(0);
    if (isSingleDigitDecodable(s[i])) {
      buffer[i] += (i >= 1 ? buffer[i - 1] : 1);
    }
    if (i >= 1 && isDoubleDigitsDecodeable(s[i - 1], s[i])) {
      buffer[i] += (i >= 2 ? buffer[i - 2] : 1);
    }
  }

  return buffer.length ? buffer[s.length - 1] : 0;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) { // DP
  if (s.length === 0) { return 0; }

  let prev1 = 1;
  let prev2 = 1;

  for (let i = 0; i < s.length; ++i) {
    let current = 0;
    if (s[i] !== '0') {
      current += prev1;
    }
    if (
      i > 0
      && s[i - 1] !== '0' // isSingleDigitDecodable
      && parseInt(s.substr(i - 1, 2)) <= 26 // isDoubleDigitsDecodeable
    ) {
      current += prev2;
    }
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
};

export default numDecodings;
