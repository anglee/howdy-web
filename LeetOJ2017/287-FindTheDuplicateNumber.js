const isMoreThanOnce = (A, x) => {
  let count = 0;
  for (let i = 0; i < A.length; ++i) {
    if (A[i] === x) {
      ++count;
    }
    if (count > 1) {
      return true;
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate0 = function(nums) { // brute-force, time O(n^2)
  const n = nums.length - 1;

  for (let i = 1; i <= n; ++i) {
    if (isMoreThanOnce(nums, i)) {
      return i;
    }
  }
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate1 = function(nums) { // brute-force, time O(n^2)
  for (let i = 0; i < nums.length - 1; ++i) {
    for (let j = i + 1; i < nums.length; ++i) {
      if (nums[j] == nums[i]) {
        return nums[j]
      }
    }
  }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate2 = function(nums) { // modify the original (failed the assumption that nums is read-only
  let dup = null;
  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    if (nums[num - 1] > 0) {
      nums[num - 1] *= -1;
    } else {
      dup = num;
    }
  }
  // restore nums
  for (let i = 0; i < nums.length; ++i) {
    nums[i] = Math.abs(nums[i]);
  }
  return dup;
};

//--------------------------------------------------------------------------------------------------


const countSmallerThanOrEqualToTarget = (A, target) => {
  let count = 0;
  for (let i = 0; i < A.length; ++i) {
    if (A[i] <= target) {
      ++count;
    }
  }
  return count;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) { // time O(n log n)
  const n = nums.length - 1;

  let i = 1;
  let j = n;
  while (i < j) {
    let mid = Math.floor((i + j) / 2);
    const count = countSmallerThanOrEqualToTarget(nums, mid);
    // console.log('mid', mid, 'count', count);
    if (count > mid) {
      j = mid;
    } else {
      i = mid + 1;
    }
  }

  return i;
};

export default findDuplicate;
