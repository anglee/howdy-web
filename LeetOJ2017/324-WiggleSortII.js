const swap = (A, i, j) => {
  if (i !== j) {
    A[i] ^= A[j];
    A[j] ^= A[i];
    A[i] ^= A[j];
  }
};


// if num.length is odd, mid is the index that to has equal number of element to its left and right
// e.g. [0,1,2,3,4], length == 5, mid = 2
// if num.length is even, mid is the index of the last element of the first half
// e.g. [0,1,2,3], length == 5, mid = 1
const midIndex = (A) => Math.ceil(A.length / 2) - 1;

const splitInRange = (A, i, j) => {
  let p = i;
  let q = j;
  while (p < q) {
    if (A[p + 1] < A[p]) {
      swap(A, p + 1, p++);
    } else {
      swap(A, p + 1, q--);
    }
  }
  // p === q
  return p;
};

const kthElement = (A, k) => {
  let i = 0;
  let j = A.length - 1;
  while (i < j) {
    const x = splitInRange(A, i, j);
    if (x === k) {
      return;
    } else if (x < k) {
      i = x + 1;
    } else {
      j = x - 1;
    }
  }
};

const maxInRange = (A, i, j) => { // find max in range [i, j]
  let max = A[i++];
  while (i <= j) {
    max = Math.max(max, A[i++]);
  }
  return max;
};

const processFirstHalf = (A, m) => { // make it so that all element equal to m appear in the front part
  const mi = midIndex(A);
  let i = 0;
  let j = mi;
  while (i < j) {
    if (A[i] === m) {
      i++
    } else {
      swap(A, i, j--);
    }
  }
};


const processSecondHalf = (A, m) => { // make it so that all element equal to m appear in the back part
  const mi = midIndex(A);
  let i = mi + 1;
  let j = A.length - 1;
  while (i < j) {
    if (A[i] !== m) {
      i++
    } else {
      swap(A, i, j--);
    }
  }
};

const interleave2Halves = (A) => {
  const mi = midIndex(A);
  let i = 0;
  let j = mi + 1;
  const ret = [];
  while (i <= mi) {
    ret.push(A[i++]);
    if (j < A.length) {
      ret.push(A[j++]);
    }
  }
  A.splice(0, A.length, ...ret);
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  const mi = midIndex(nums);
  // console.log(`mi`, mi);

  kthElement(nums, mi);
  // console.log('after kthElement', nums);

  const m = maxInRange(nums, 0, mi);
  // console.log('m', m);

  processFirstHalf(nums, m);
  // console.log('after processFirstHalf', nums);

  processSecondHalf(nums, m);
  // console.log('after processSecondHalf', nums);

  interleave2Halves(nums);
  // console.log('after interleave2Halves', nums);
};

export default wiggleSort;