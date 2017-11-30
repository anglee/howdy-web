/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray0 = function(nums) {
  const sums = new Map();
  sums.set(-1, 0);

  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    sums.set(i, sum);
  }
  let maxSum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i; j < nums.length; ++j) {
      maxSum = Math.max(maxSum, sums.get(j) - sums.get(i - 1));
    }
  }
  return maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentMaxSum = 0;
  for (let num of nums) {
    currentMaxSum = Math.max(currentMaxSum + num, num);
    maxSum = Math.max(maxSum, currentMaxSum);
  }
  return maxSum;
};

export default maxSubArray;
