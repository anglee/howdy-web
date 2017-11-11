/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < nums.length - 2; ++i) {
    let k = nums.length - 1;
    for (let j = i + 1; j < k; ++j) {
      while (k > j && nums[i] + nums[j] + nums[k] >= target) {
        k--;
      }
      count += (k - j);
    }
  }
  return count;
};

export default threeSumSmaller;