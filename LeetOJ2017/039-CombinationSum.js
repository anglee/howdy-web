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

//--------------------------------------------------------------------------------------------------


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum1 = function(candidates, target) { // DP
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


//--------------------------------------------------------------------------------------------------
// alternative recursive solution, easy to understand
import _ from 'lodash';
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

  const ret = [];

  const helper = (candidates, solution) => {

    const sum = _.sum(solution);

    if (sum > target) { return }

    if (sum === target) {
      ret.push(solution);
      return;
    }

    for (let i = 0; i < candidates.length; ++i) {
      const candidate = candidates[i];
      helper(candidates.slice(i), [...solution, candidate]);
    }
  };

  helper(candidates, []);

  return ret;
};


//--------------------------------------------------------------------------------------------------
// Improve time / space complexity for combinationSum2

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum3 = function(candidates, target) {

  const ret = [];

  const helper = (start, solution, sum) => {

    if (sum > target) { return }

    if (sum === target) {
      ret.push(_.clone(solution));
      return;
    }

    for (let i = start; i < candidates.length; ++i) {
      const candidate = candidates[i];
      solution.push(candidate);
      helper(i, solution, sum + candidate);
      solution.pop();
    }
  };

  helper(0, [], 0);

  return ret;
};
export default combinationSum1;