/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum0 = function(candidates, target) {
  if (target < 0) {
    return [];
  }
  if (candidates.length === 0) {
    return target === 0 ? [[]] : [];
  }
  const [head, ...tail] = candidates;
  return [
    ...combinationSum(tail, target),
    ...combinationSum(candidates, target - head).map(results => [head, ...results]),
  ];
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) { // DP
  const buf = new Array(target + 1).fill([]);
  buf[0] = [[]];
  for (let can of candidates) {
    for (let i = 1; i <= target; ++i) {
      if (i - can >= 0) {
        buf[i] = buf[i].concat(buf[i - can].map(it => [can, ...it]))
      }
    }
  }
  return buf[target];
};

export default combinationSum;