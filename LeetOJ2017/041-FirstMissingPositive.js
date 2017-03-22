const swap = (A, i, j) => {
  A[i] ^= A[j];
  A[j] ^= A[i];
  A[i] ^= A[j];
};

// partition the array A, so that all valid elements are in the first part
const partition = (A, isValid) => {
  let i = 0;
  let j = A.length - 1;
  while (i <= j) {
    if (isValid(A[i])) {
      ++i;
    } else {
      swap(A, i, j--);
    }
  }
  return i - 1;
};

const markAsFound = (A, num) => {
  if (num - 1 < A.length && A[num - 1] > 0) {
    A[num - 1] *= -1;
  }
};

const isFound = (A, num) => {
  return A[num - 1] < 0;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// https://discuss.leetcode.com/topic/2633/share-my-o-n-time-o-1-space-solution
var firstMissingPositive0 = function(nums) {
  const isValid = num => num > 0;
  const indexOfLastValid = partition(nums, isValid);
  for (let i = 0; i <= indexOfLastValid; ++i) {
    const num = Math.abs(nums[i]);
    markAsFound(nums, num);
  }
  for (let i = 0; i <= indexOfLastValid; ++i) {
    const num = i + 1;
    if (!isFound(nums, num)) {
      return num;
    }
  }
  return indexOfLastValid + 2;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// https://discuss.leetcode.com/topic/8293/my-short-c-solution-o-1-space-and-o-n-time
var firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; ++i) {
    let num = nums[i];
    while (nums[num - 1] !== nums[i] && num > 0 && num <= nums.length) {
      swap(nums, i, num - 1);
      num = nums[i];
    }
  }
  let num = 1;
  while (num <= nums.length) {
    if (nums[num - 1] !== num) {
      return num;
    }
    ++num;
  }
  return nums.length + 1;
};

export default firstMissingPositive;
