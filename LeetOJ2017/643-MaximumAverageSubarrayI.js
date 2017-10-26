
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let maxWindow = Number.NEGATIVE_INFINITY;
  let window = 0;
  for (let i = 0; i < nums.length; ++i) {
    window += nums[i];
    if (i >= k) {
      window -= nums[i - k];
    }
    if (i >= k - 1) {
      maxWindow = Math.max(maxWindow, window);
    }
  }
  return maxWindow / k;
};

export default findMaxAverage;
