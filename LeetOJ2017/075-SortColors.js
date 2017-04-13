/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors0 = function(nums) {
  const map = new Map();
  map.set(0, []);
  map.set(1, []);
  map.set(2, []);

  nums.forEach(num => {
    map.get(num).push(num);
  });
  return [...map.get(0),...map.get(1),...map.get(2)];
};

const swap = (A, i, j) => {
  if (i === j) { return; }
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors1 = function(nums) {
  let i = 0, j = 0, k = nums.length - 1;
  while (j <= k) {
    if (nums[j] === 0) {
      swap(nums, i++, j++);
    } else if (nums[j] === 1) {
      j++;
    } else { // nums[j] === 2
      swap(nums, j, k--);
    }
  }
  return nums;
};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left = 0, right = nums.length - 1;
  for (let x = 0; x <= right; ++x) {
    while (nums[x] === 2 && x < right) {
      swap(nums, x, right--);
    }
    while (nums[x] === 0 && x > left) {
      swap(nums, x, left++);
    }
  }

  return nums;
};

export default sortColors;