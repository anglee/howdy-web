/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors0 = function(nums) {
  const map = new Map();
  map.set(1, []);
  map.set(2, []);
  map.set(3, []);

  nums.forEach(num => {
    map.get(num).push(num);
  });
  return [...map.get(1),...map.get(2),...map.get(3)];
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
  let x = 0;
  while (x <= k && i <= k && j <= k) {
    if (nums[x] === 1) {
      swap(nums, x, i);
      i++;
      if (j < i) {
        j++;
        x++;
      }
    } else if (nums[x] === 2) {
      j++;
      x++;
    } else { // nums[x] === 3
      swap(nums, x, k);
      k--;
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
    while (nums[x] === 3 && x < right) {
      swap(nums, x, right--);
    }
    while (nums[x] === 1 && x > left) {
      swap(nums, x, left++);
    }
  }

  return nums;
};

export default sortColors;