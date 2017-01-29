/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays0 = function(nums, S) {

  let count = 0;

  const findTargetSumWaysI = (sum, i) => {
    if (i === nums.length) {
      if (sum === S) {
        ++count;
      }
      return;
    }
    findTargetSumWaysI(sum + nums[i], i + 1);
    findTargetSumWaysI(sum - nums[i], i + 1);
  };

  findTargetSumWaysI(0, 0);

  return count;
};


const  memoize = function(fun) {
  const map = new Map();
  return function () {
    const key = `${arguments[0]}_${arguments[1]}`;
    if (map.has(key)) {
      return map.get(key);
    }
    const ret = fun.apply(this, arguments);
    map.set(key, ret);
    return ret;
  }
};
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {

  const findTargetSumWaysI = memoize((sum, i) => {
    if (i === nums.length) {
      if (sum === S) {
        return 1;
      }
      return 0;
    }

    return (
      findTargetSumWaysI(sum + nums[i], i + 1) +
      findTargetSumWaysI(sum - nums[i], i + 1)
    );
  });

  return findTargetSumWaysI(0, 0);
};

export default findTargetSumWays;