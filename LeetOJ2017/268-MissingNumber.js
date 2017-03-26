/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let sum = 0;
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    sum += (i + 1);
    sum -= nums[i];
  }
  return sum;
};

export default missingNumber;
