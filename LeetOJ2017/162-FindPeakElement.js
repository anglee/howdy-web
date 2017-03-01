/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement0 = function(nums) { // time: O(n)
  const n = nums.length;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] < nums[i - 1]) {
      return i - 1;
    }
  }
  return n - 1;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement1 = function(nums) { // time: O(log n)
  const n = nums.length;
  let i = 0;
  let j = n - 1;

  while (i < j) {
    let m1 = Math.floor((i + j) / 2);
    let m2 = m1 + 1;
    if (nums[m2] > nums[m1]) {
      i = m2;
    } else {
      j = m1;
    }
  }

  return i;
};


const helper = (nums, i, j) => {
  if (i === j) { return i; }
  let m1 = Math.floor((i + j) / 2);
  let m2 = m1 + 1;

  if (nums[m2] > nums[m1]) {
    return helper(nums, m2, j);
  } else {
    return helper(nums, i, m1);
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) { // time: O(log n)


  return helper(nums, 0, nums.length - 1);
};


export default findPeakElement;