/**
 * @param {number} x
 * @return {number}
 */
var reverse0 = function(x) {
  if (x < 0) {
    const xString = `${x * -1}`;
    return parseInt(xString.split('').reverse().join('')) * -1;
  } else {
    const xString = `${x}`;
    return parseInt(xString.split('').reverse().join(''));
  }
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let ret = 0;
  while (x) {
    const digit = x % 10;
    x = (x - digit) / 10;
    ret = ret * 10 + digit;
  }
  return ret;
};

// LeetCode added overflow tests which should apply for JavaScript, to get the tests passed
var solutionForLeetCodeOJ = (x) => {
  const ret = reverse(x);
  const maxInt = Math.pow(2, 31);
  if (ret >= maxInt || ret < -1 * maxInt) {
    return 0;
  }
  return ret;
};

export default reverse;