/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum0 = function(nums, target) {
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const map = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }
    map.set(target - nums[i], i);
  }
};

export default twoSum;