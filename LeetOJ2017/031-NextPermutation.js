const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

const reverse = (A, i) => { // reverse A.slice(i) in place
  let x = i;
  let y = A.length - 1;
  while (x < y) {
    swap(A, x++, y--);
  }
  return A;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i;
  for (i = nums.length - 2; i >= 0; --i) {
    if (nums[i] < nums[i + 1]) {
      break;
    }
  }
  if (i < 0) {
    reverse(nums, 0);
    return;
  }

  for (let j = nums.length; j > i; --j) {
    if (nums[j] > nums[i]) {
      swap(nums, i, j);
      break;
    }
  }

  reverse(nums, i + 1);
};

export default nextPermutation;