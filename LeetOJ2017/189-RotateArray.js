/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate0 = function(nums, k) {
  return [
    ...nums.slice(nums.length - k),
    ...nums.slice(0, nums.length - k),
  ];
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

  const reverseRange = (A, i, j) => {
    let left = i;
    let right = j - 1;
    while (left < right) {
      // swap(A, left, right);
      const temp = A[left];
      A[left] = A[right];
      A[right] = temp;
      ++left;
      --right;
    }
  };

  k = k % nums.length;
  if (k === 0) { return; }
  reverseRange(nums, 0, nums.length - k);
  reverseRange(nums, nums.length - k, nums.length);
  reverseRange(nums, 0, nums.length);
};

export default rotate;