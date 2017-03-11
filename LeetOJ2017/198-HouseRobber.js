/**
 * @param {number[]} nums
 * @return {number}
 */
var rob0 = function(nums) { // recursion
  if (nums.length === 0) {
    return 0;
  }
  return Math.max(
    nums[0] + rob0(nums.slice(2)), // with first
    rob0(nums.slice(1))// without first
  );
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) { // DP
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  const n = nums.length;
  const buf = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < n; ++i) {
    buf[i] = Math.max(nums[i] + buf[i - 2], buf[i - 1]);
  }
  return Math.max(buf[n - 1], buf[n - 2]);
};

export default rob;