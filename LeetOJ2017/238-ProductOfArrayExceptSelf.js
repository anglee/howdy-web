/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf0 = function(nums) { // time: O(n), space: O(n)
  const leftProducts = Array(nums.length).fill(1);
  const rightProducts = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; ++i) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; --i) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  const ret = Array(nums.length);
  for (let i = 0; i < nums.length; ++i) {
    ret[i] = leftProducts[i] * rightProducts[i];
  }

  return ret;
};

var productExceptSelf = function(nums) { // time: O(n), space: O(1) except output space
  const ret = Array(nums.length).fill(1);


  for (let i = 1; i < nums.length; ++i) {
    ret[i] = ret[i - 1] * nums[i - 1];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; --i) {
    ret[i] = ret[i] * right;
    right *= nums[i];
  }

  return ret;
};

export default productExceptSelf;
