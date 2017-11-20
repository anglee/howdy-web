/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4_0 = (nums, target) => { // recursion
  if (target < 0) {
    return 0;
  }
  if (target === 0) {
    return 1;
  }
  return nums.reduce((sum, num) => sum + combinationSum4_0(nums, target - num), 0);
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4_1 = (nums, target) => { // recursion + memoize
  const memoize = f => {
    const map = new Map();
    return (nums, target) => {
      if (map.has(target)) {
        return map.get(target);
      }
      const ret = f(nums, target);
      map.set(target, ret);
      return ret;
    };
  };
  const helper = memoize(function(nums, target) {
    if (target < 0) {
      return 0;
    }
    if (target === 0) {
      return 1;
    }
    return nums.reduce((sum, num) => sum + helper(nums, target - num), 0);
  });
  return helper(nums, target);
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4_2 = function(nums, target) { // DP
  const buf = [];
  for (let i = 0; i <= target; ++i) {
    buf.push(0);

    for (let j = 0; j < nums.length; ++j) {
      if (i === nums[j]) {
        buf[i]++;
      }
      if (i - nums[j] > 0) {
        buf[i] += buf[i - nums[j]];
      }
    }
  }

  return buf[target];
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) { // Redo DP
  const buffer = Array(target + 1).fill(0);
  buffer[0] = 1;
  for (let i = 1; i <= target; ++i) {
    for (let num of nums) {
      if (i - num >= 0) {
        buffer[i] += buffer[i - num];
      }
    }
  }
  return buffer[target];
};

export default combinationSum4;
