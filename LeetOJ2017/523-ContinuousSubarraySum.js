const checkZero = (nums) => {
  let prev = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === 0 && prev === 0) { return true; }
    prev = nums[i];
  }
  return false;
};

//--------------------------------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum0 = function(nums, k) { // brute force, Time: O(n ^ 2), Space: O(1)
  if (nums.length < 2) { return false; }
  if (k === 0) { return checkZero(nums); }

  for (let i = 0; i < nums.length - 1; ++i) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; ++j) {
      sum += nums[j];
      if (sum % k === 0) {
        return true;
      }
    }
  }
  return false;
};


//--------------------------------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) { // Time: O(n * k), Space: O(k)
  if (nums.length < 2) { return false; }
  if (k === 0) { return checkZero(nums); }

  let set = new Set();
  for (let num of nums) {
    const newSet = new Set([num % k]);
    for (let item of set) {
      if ((item + num) % k === 0) {
        return true;
      }
      newSet.add((item + num) % k);
    }
    set = newSet;
  }
  return false;
};

export default checkSubarraySum;