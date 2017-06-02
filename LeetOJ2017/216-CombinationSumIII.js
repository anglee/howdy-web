import _ from 'lodash';

const doCombine = (k, candidates, n) => {
  if (n === 0 && k === 0) {
    return [[]]
  }

  if (n <= 0 || candidates.length === 0) {
    return [];
  }

  const [head, ...tail] = candidates;
  return [
    ...doCombine(k - 1, tail, n - head).map(comb => [...comb, head]),
    ...doCombine(k, tail, n),
  ];
};

const range = (i, j) => {
  const ret = [];
  for (let x = i; x < j; ++x) {
    ret.push(x);
  }
  return ret;
};
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum0 = function(k, n) {
  return doCombine(k, range(1, 10), n);
};
//--------------------------------------------------------------------------------------------------

const memoize = (f) => {
  const retMap = new Map();
  const generateKey = (startNum, k, n) => `${startNum}_${k}_${n}`;
  return (startNum, k, n) => {
    const key = generateKey(startNum, k, n);
    if (retMap.has(key)) {
      return retMap.get(key);
    }
    const ret = f(startNum, k, n);
    retMap.set(key, ret);
    return ret;
  };
};
const helper = memoize((startNum, k, n) => {
  if (startNum > 9 || startNum > n) { return []; }
  if (k === 1 && n <= 9) { return [[n]]; }
  const ret = [];
  for (let i = startNum; i <= 9; ++i) {
    const AA = helper(i + 1, k - 1, n - i);
    ret.push(...AA.map(A => [i, ...A]));
  }
  return ret;
});
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum1 = function(k, n) {
  return helper(1, k, n);
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum = function(k, n) { // DP
  let buf = [[[]], ...Array(n).fill([])];
  for (let ki = 1; ki <= k; ++ki) {
    const newBuf = Array(n + 1).fill([]);
    for (let i = 1; i <= 9; ++i) {
      for (let j = 1; j <= n; ++j) {
        if (j - i >= 0 && buf[j - i].length > 0) {
          const prev = buf[j - i];
          newBuf[j] = newBuf[j].concat(
            prev
              .filter(it => it.length === 0 || it[it.length - 1] < i)
              .map(comb => [...comb, i])
          );
        }
      }
    }
    buf = newBuf;
    //console.log(`kk = ${ki}`, buf);
  }
  return buf[n];
};

export default combinationSum1;