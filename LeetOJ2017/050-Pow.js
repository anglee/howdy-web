/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow0 = function(x, n) {
  let ret = 1;
  for (let i = 0; i < n; ++i) {
    ret *= x;
  }
  return ret;
};

//--------------------------------------------------------------------------------------------------


const toBinaryDigits = (number) => {
  return number.toString(2).split('').map(it => parseInt(it, 10));
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow1 = function(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  const digits = toBinaryDigits(n).reverse();
  let it = x;
  let ret = 1;
  for (let digit of digits) {
    if (digit === 1) {
      ret *= it;
    }
    it = it * it;
  }
  return ret;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  const binary = n.toString(2);
  let factor = x;
  let ret = 1;
  for (let i = binary.length - 1; i >= 0; --i) {
    if (binary[i] === '1') {
      ret *= factor;
    }
    factor = factor * factor;
  }
  return ret;
};

export default myPow;
