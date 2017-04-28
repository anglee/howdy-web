const findStartOfRotatedArray = (nums) => {
  let i = 0;
  let j = nums.length - 1;
  while (i !== j) {
    if (i == j - 1) {
      return nums[i] < nums[j] ? i : j;
    }
    const m = Math.floor((i + j) / 2);
    if (nums[i] < nums[m] && nums[m] < nums[j]) {
      return i;
    }
    if (nums[m] < nums[j] && nums[j] < nums[i]) {
      j = m;
    } else if (nums[j] < nums[i] && nums[i] < nums[m]) {
      i = m;
    }
  }
  return i;
};

const binarySearchInRange = (nums, i, j, target) => {
  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    if (nums[m] === target) {
      return m;
    }
    if (nums[m] < target) {
      i = m + 1;
    } else {
      j = m - 1;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search0 = function(nums, target) {
  if (nums.length === 0) {
    return -1;
  }
  const breakStart = findStartOfRotatedArray(nums);
  if (target >= nums[breakStart] && target <= nums[nums.length - 1]) {
    return binarySearchInRange(nums, breakStart, nums.length - 1, target);
  }
  return binarySearchInRange(nums, 0, breakStart - 1, target);
};

//===================================================================================

const searchI = (A, i, j, target) => {
  if (i === j) {
    return A[i] === target ? i : -1;
  }
  if (j === i + 1) {
    if (A[i] === target) { return i; }
    if (A[j] === target) { return j; }
    return -1;
  }

  const left = A[i];
  const right = A[j];
  const m = Math.floor((i + j) / 2);
  const mid = A[m];

  if (mid < right) {
    if (target >= mid && target <= right) {
      // search the right half
      return searchI(A, m, j, target);
    }
    // search the left half
    return searchI(A, i, m, target);
  } else {
    if (target >= left && target <= mid) {
      // search the left half
      return searchI(A, i, m, target);
    }
    // search the right half
    return searchI(A, m, j, target);
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return searchI(nums, 0, nums.length - 1, target);
};

export default search;
