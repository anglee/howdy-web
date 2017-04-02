const memoize = (func) => {
  const resultMap = new Map();
  return (num) => {
    if (resultMap.has(num)) {
      return resultMap.get(num);
    }
    const ret = func(num);
    resultMap.set(num, ret);
    return ret;
  }
};

const toString = memoize((num) => {
  return `${num}`;
});

const compFunc = (a, b) => {

  const strA = toString(a);
  const strB = toString(b);

  if (strA.length === strB.length) {
    return b - a;
  }

  for (let i = 0; i <= strA.length || i <= strB.length; ++i) {
    const charA = strA[i % strA.length];
    const charB = strB[i % strB.length];
    if (charA !== charB) {
      return charA > charB ? -1 : 1;
    }
  }
  return 0;
};

const checkZero = (str) => str[0] === '0' ? '0' : str;

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  return checkZero(nums.sort(compFunc).join(''));
};

export default largestNumber;