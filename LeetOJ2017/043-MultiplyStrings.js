const  mul = (digits, digit) => {
  if (digit === 0) {
    return [0];
  }
  if (digits === 1) {
    return digits.slice(0);
  }
  let co = 0;
  const ret = [];
  for (let d of digits) {
    const prod = d * digit + co;
    const out = prod % 10;
    ret.push(out);
    co = (prod - out) / 10;
  }
  if (co > 0) {
    ret.push(co);
  }
  return ret;
};

const add = (digits1, digits2) => {
  if (digits1.length === 0) {
    return digits2.slice(0);
  }
  if (digits2.length === 0) {
    return digits1.slice(0);
  }
  let co = 0;
  const ret = [];
  for (let i = 0; i < digits1.length || i < digits2.length; ++i) {
    const digit1 = digits1[i] || 0;
    const digit2 = digits2[i] || 0;
    const sum = digit1 + digit2 + co;
    const out = sum % 10;
    ret.push(out);
    co = (sum - out) / 10;
  }
  if (co > 0) {
    ret.push(co);
  }
  return ret;
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') { return '0'; }
  let retDigits = [];
  const digits1 = num1.split('').map(it => parseInt(it, 10)).reverse();
  const digits2 = num2.split('').map(it => parseInt(it, 10)).reverse();
  const mulDigits1 = (() => {
    const map = new Map();
    return (digit) => {
      if (map.has(digit)) {
        return map.get(digit);
      }
      const ret = mul(digits1, digit);
      map.set(digit, ret);
      return map.get(digit);
    };
  })();
  digits2.forEach((digit, i) => {
    const prod = mulDigits1(digit);
    retDigits = add(retDigits, [...Array(i).fill(0), ...prod]);
  });
  return retDigits.reverse().join('');
};

export default multiply;