const memoize = (origianlFunc) => (() => {
  const resultMap = new Map();
  return (n) => {
    if (resultMap.has(n)) {
      return resultMap.get(n);
    }
    const ret = origianlFunc(n);
    resultMap.set(n, ret);
    return ret;
  }
})();

const getFactorial = memoize((n) => {
  let ret = 1;
  for (let i  = n; i >= 2; --i) {
    ret *= i;
  }
  return ret;
});

const doPermute = (numbers, k) => { // assume numbers are sorted
  if (k === 1) {
    return numbers.join('');
  }
  const n = numbers.length;
  const nf = getFactorial(n-1);
  const i = Math.ceil(k / nf) - 1;
  const digit = numbers[i];
  numbers.splice(i, 1);
  return `${digit}${doPermute(numbers, k - i * nf)}`
};
const range = (i, j) => {
  const ret = [];
  for (let x = i; x < j; ++x) {
    ret.push(x);
  }
  return ret;
};
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  return doPermute(range(1, n + 1), k)
};

export default getPermutation;