/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4_0 = (nums, target) => {
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
var combinationSum4_1 = (nums, target) => {
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
var combinationSum4 = function(nums, target) {
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

export default combinationSum4;
