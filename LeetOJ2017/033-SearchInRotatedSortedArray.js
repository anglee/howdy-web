
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
