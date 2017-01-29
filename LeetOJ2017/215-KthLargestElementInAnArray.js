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
    return findKthLargest(bigger, k);
  } else if (bigger.length + same.length >= k) {
    return target;
  } else {
    return findKthLargest(smaller, k - bigger.length - same.length);
  }
};

const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

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


export default findKthLargest;