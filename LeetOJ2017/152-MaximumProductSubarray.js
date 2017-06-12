/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct0 = function(nums) {
  let maxPositive = null;
  let minNegative = null;
  let ret = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    const candidates = [num];
    if (maxPositive !== null) {
      candidates.push(num * maxPositive);
    }
    if (minNegative !== null) {
      candidates.push(num * minNegative);
    }
    const max = Math.max(...candidates);
    const min = Math.min(...candidates);
    maxPositive = max >= 0 ? max : null;
    minNegative = min < 0 ? min : null;

    ret = Math.max(max, ret);
  };

  return ret;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct1 = function(nums) {
  let max = nums[0];
  let min = nums[0];
  let ret = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    const num = nums[i];
    const candidates = [num, num * max, num * min];
    max = Math.max(...candidates);
    min = Math.min(...candidates);
    ret = Math.max(max, ret);
  };

  return ret;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let ret = nums[0];
  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    const num = nums[i];
    [min, max] = [
      Math.min(num, num * min, num * max),
      Math.max(num, num * min, num * max)
    ];
    ret = Math.max(ret, max);
  }
  return ret;
};

export default maxProduct;
