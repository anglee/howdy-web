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
var findDuplicate0 = function(nums) { // time O(n^2)
  const n = nums.length - 1;

  for (let i = 1; i <= n; ++i) {
    if (isMoreThanOnce(nums, i)) {
      return i;
    }
  }
};

// =====================================================

const countSmallerThanOrEqualToMid = (A, mid) => {
  let count = 0;
  for (let i = 0; i < A.length; ++i) {
    if (A[i] <= mid) {
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
    const count = countSmallerThanOrEqualToMid(nums, mid);
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
