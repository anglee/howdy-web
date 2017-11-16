/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder0 = function(n) {
  return Array(n).fill().map((_, i) => i + 1).sort();
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder1 = function(n) {
  const digitCount = Math.floor(Math.log10(n)) + 1;
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const firstDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const ret = [];
  const generate = (prefix, depth) => {
    const int = parseInt(prefix, 10);
    if (int <= n) {
      ret.push(int);
    }
    if (depth === digitCount) {
      return;
    }
    digits.forEach(digit => {
      generate(prefix + digit, depth + 1);
    });
  };

  firstDigits.forEach(digit => {
    generate(digit, 1);
  });
  return ret;
};

//--------------------------------------------------------------------------------------------------


const memoize = (f) => {
  const map = new Map();
  return (count) => {
    if (map.has(count)) {
      return map.get(count);
    }
    const ret = f(count);
    map.set(count, ret);
    return ret;
  }
};
const generate = memoize((count) => {
  if (count === 0) {
    return [''];
  }
  const tails = generate(count - 1);
  const ret = [''];
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(head => {
    tails.forEach(tail => {
      ret.push(head + tail);
    });
  });
  return ret;
});

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder2 = function(n) {
  const digitCount = Math.floor(Math.log10(n)) + 1;
  const firstDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const ret = [];
  const tails = generate(digitCount - 1);
  firstDigits.forEach(head => {
    tails.forEach(tail => {
      const number = parseInt(head + tail);
      if (number <= n) {
        ret.push(number);
      }
    });
  });
  return ret;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  const digitCount = Math.floor(Math.log10(n)) + 1;
  const firstDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const ret = [];
  const tails = generate(digitCount - 1);
  firstDigits.forEach(head => {
    let longestDone = false;
    for (let i = 0; i < tails.length; ++i) {
      const tail = tails[i];
      if (longestDone && tail.length + 1 === digitCount) { continue; }
      const number = parseInt(head + tail);
      if (number <= n) {
        ret.push(number);
      } else {
        // we already found the first > n, meaning that if a number we encounter
        // in the future has same number of digits as n, it must > n and we don't need to
        // process it, for example if n = 100, we don't need to process '101', '112', but we need to
        // continue process '12'
        longestDone = true;
      }
    }
  });
  return ret;
};

export default lexicalOrder;
