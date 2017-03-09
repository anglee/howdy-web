const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

const kthElement = (nums, k) => {
  const process = (A, left, right) => {
    let i = left;
    let j = right;

    while (i < j) {
      if (A[i + 1] < A[i]) {
        swap(A, i + 1, i++);
      } else {
        swap(A, i + 1, j--);
      }
    }
    return i;
  };
  
  let left = 0;
  let right = nums.length - 1;
  while (left !== right) {
    const i = process(nums, left, right);
    if (i === k) {
      return;
    }
    if (i < k) {
      left = i + 1;
    } else { // i > k
      right = i - 1;
    }
  }
};

const divideInHalf = (nums) => {
  // make it so that the first half contains the smaller half of nums
  // and the second half contains the bigger half of nums
  const medium = Math.ceil(nums.length / 2) - 1;
  kthElement(nums, medium);
};

const interleave = (nums) => {
  const m = Math.ceil(nums.length / 2) - 1;
  let i = 1;
  let j = m + 1;
  while (j < nums.length) {
    swap(nums, i, j);
    j += 1;
    i += 2;
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  divideInHalf(nums);
  interleave(nums);
};

export default wiggleSort;