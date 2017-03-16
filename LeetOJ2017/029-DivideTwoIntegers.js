/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide0 = function(dividend, divisor) {
  let ret = 0;
  while (dividend >= divisor) {
    dividend -= divisor;
    ret += 1;
  }
  return ret;
};


const MAX_INT = 2147483647;

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

  if (divisor === 0) {
    return MAX_INT;
  }
  let isDividendNegative = false;
  if (dividend < 0) {
    dividend = 0 - dividend;
    isDividendNegative = true;
  }
  let isDivisorNegative = false;
  if (divisor < 0) {
    divisor = 0 - divisor;
    isDivisorNegative = true;
  }

  let ret = 0;
  const stack = [];
  let dvsr = divisor;
  let step = 1;
  do {
    stack.push({ dvsr, step });
    dvsr = dvsr + dvsr;
    step = step + step;
  } while (dvsr < dividend);

  while (dividend >= divisor) {
    let { dvsr, step } = stack.pop();
    while (dividend >= dvsr) {
      dividend -= dvsr;
      ret += step;
    }
  }
  if (isDividendNegative ^ isDivisorNegative) {
    ret = 0 - ret;
  }
  if (ret > MAX_INT) {
    return MAX_INT;
  }
  return ret;
};


export default divide;