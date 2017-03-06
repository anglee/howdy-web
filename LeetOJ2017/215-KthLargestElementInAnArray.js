/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest0 = function(nums, k) {
  if (nums.length === 1) {
    return nums[0];
  }

  const target = nums[0];
  const bigger = [];
  const same = [];
  const smaller = [];
  nums.forEach((it) => {
    if (it > target) {
      bigger.push(it);
    } else if (it < target) {
      smaller.push(it);
    } else {
      same.push(it);
    }
  });

  if (bigger.length >= k) {
    return findKthLargest1(bigger, k);
  } else if (bigger.length + same.length >= k) {
    return target;
  } else {
    return findKthLargest1(smaller, k - bigger.length - same.length);
  }
};

// ====================================================================

const swap = (A, i, j) => {
  if (i === j) { return; }
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest1 = function(nums, k) {

  const findKthLargetInRange = (k, start, end) => {
    // console.log('start=', start, 'end=', end, 'k=', k);
    if (end < start) {
      // console.log('ah oh');
      return -1000;
    }
    if (start === end) {
      return nums[start];
    }
    let l = start;
    let r = end;
    let i = start;
    const target = nums[i];

    while (i <= r) {
      if (nums[i] === target) {
        i++;
      } else if (nums[i] > target) {
        swap(nums, l++, i);
      } else { // nums[i] < target
        swap(nums, r--, i);
      }
    }

    const biggerCount = l - start;
    const smallerCount = end - r;
    const sameCount = end - start  + 1 - biggerCount - smallerCount;
    // console.log(`target`, target);
    // console.log(`biggerCount = ${biggerCount}`);
    // console.log(`smallerCount = ${smallerCount}`);
    // console.log(`sameCount = ${sameCount}`);
    // console.log(`nums = ${nums}`);
    // console.log(`------------------------`);
    if (biggerCount >= k) {
      return findKthLargetInRange(k, start, l - 1);
    } else if (biggerCount + sameCount >= k) {
      return target;
    } else {
      return findKthLargetInRange(k - biggerCount - sameCount, start + biggerCount + sameCount, end);
    }
  };

  return findKthLargetInRange(k, 0, nums.length - 1);
};

// ====================================================================

// process makes it so that in the range A[l, r]
// to the left of return index, i, all elements >= A[i]
// to the right of return index, i, all elements < A[i]
const process = (A, l, r) => {
  let i = l;
  let j = r;
  while (i < j) {
    if (A[i + 1] >= A[i]) {
      swap(A, i, i + 1);
      ++i;
    } else {
      swap(A, i + 1, j);
      --j;
    }
  }
  return i;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let l = 0;
  let r = nums.length - 1;
  while (true) {
    const i = process(nums, l, r);
    if (i === k - 1) {
      return nums[i];
    } else if (i > k - 1) {
      r = i - 1;
    } else { // i < k - 1
      l = i + 1;
    }
  }
};

export default findKthLargest;