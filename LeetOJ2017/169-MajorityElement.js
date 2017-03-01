/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement0 = function(nums) {
  const countMap = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (!countMap.has(nums[i])) {
      countMap.set(nums[i], 1);
    } else {
      countMap.set(nums[i], countMap.get(nums[i]) + 1);
    }
    if (countMap.get(nums[i]) > nums.length / 2) {
      return nums[i];
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // Moore voting
  // see https://discuss.leetcode.com/topic/8692/o-n-time-o-1-space-fastest-solution/13

  let count = 0;
  let major = null;
  for (let i = 0; i < nums.length; ++i) {
    if (count === 0) {
      major = nums[i];
      count = 1;
    } else {
      if (nums[i] === major) {
        ++count;
      } else {
        --count;
      }
    }
  }
  return major;
};

export default majorityElement;