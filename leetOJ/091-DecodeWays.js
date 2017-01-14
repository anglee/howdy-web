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


/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) { // DP

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

export default numDecodings;
