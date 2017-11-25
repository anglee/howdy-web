const isSelfDividingNumber = (number) => {
  const digits = `${number}`.split('').map(digit => parseInt(digit));
  for (let digit of digits) {
    if (digit === 0) {
      return false;
    }
    if (number % digit !== 0) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const ret = [];
  for (let i = left; i <= right; ++i) {
    if (isSelfDividingNumber(i)) {
      ret.push(i);
    }
  }
  return ret;
};

export default selfDividingNumbers;