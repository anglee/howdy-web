/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays0 = function(nums, k) { // Brute force
  const sums = Array(nums.length).fill(0);

  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    if (i >= k) {
      sum -= nums[i - k];
    }
    if (i - k + 1 >= 0) {
      sums[i - k + 1] = sum;
    }
  }

  let maxSum = 0;
  let ret = [];
  for (let i = 0; i + 3 * k < nums.length; ++i) {
    for (let j = i + k; j + 2 * k < nums.length; ++j) {
      for (let m = j + k; m + k <= nums.length; ++m) {
        const sum  =sums[i] + sums[j] + sums[m];
        if (sum > maxSum) {
          maxSum = sum;
          ret = [i, j, m];
        }
      }
    }
  }

  return ret;
};

const memoize = (f) => {
  const map = new Map();
  return (i, j) => {
    const key = `${i}_${j}`;
    if (map.has(key)) {
      return map.get(key);
    }
    const ret = f(i, j);
    map.set(key, ret);
    return ret;
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays1 = function(nums, k) {
  if (k > Math.floor(nums.length / 3)) {
    throw new Error('in valid input k');
  }
  const sums = Array(nums.length).fill(0);

  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    if (i >= k) {
      sum -= nums[i - k];
    }
    if (i - k + 1 >= 0) {
      sums[i - k + 1] = sum;
    }
  }

  const getSum2 = memoize((i, j) => {
    return sums[i] + sums[j];
  });

  let maxSum = 0;
  let ret = [];
  for (let i = 0; i + 3 * k <= nums.length; ++i) {
    for (let j = i + k; j + 2 * k <= nums.length; ++j) {
      for (let m = j + k; m + k <= nums.length; ++m) {
        const sum  = sums[i] + getSum2(j, m);
        if (sum > maxSum) {
          maxSum = sum;
          ret = [i, j, m];
        }
      }
    }
  }

  return ret;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {

  // Array 'sums' stores sums of each length = k subarrays starting at index i;
  // e.g. sums[5] = the sum of subarray(5, 5 + k);
  const sums = Array(nums.length).fill(0);
  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    if (i >= k) {
      sum -= nums[i - k];
    }
    if (i - k + 1 >= 0) {
      sums[i - k + 1] = sum;
    }
  }

  // Array 'lefts' stores the max sum to the left of i including i
  // e.g. left[8] stores the max of sums among sums[0..8]
  const lefts = (() => {
    const ret = [];
    let max = 0;
    let maxI = null;
    for (let i = 0; i < sums.length; ++i) {
      if (sums[i] > max) {
        max = sums[i];
        maxI = i;
      }
      ret[i] = maxI;
    }
    return ret;
  })();

  // Array 'rights' stores the max sum to the right of i including i
  // e.g. left[8] stores the max of sums among sums[8...(end)]
  const rights = (() => {
    const ret = [];
    let max = 0;
    let maxI = null;
    for (let i = sums.length - k; i >= 0; --i) {
      if (sums[i] > max) {
        max = sums[i];
        maxI = i;
      }
      ret[i] = maxI;
    }
    return ret;
  })();

  let maxSum = 0;
  let ret = [];
  for (let i = k; i + 2 * k <= nums.length; ++i) {
    const leftI = lefts[i - k];
    const rightI = rights[i + k];
    const sum = sums[leftI] + sums[i] + sums[rightI];
    if (sum > maxSum) {
      maxSum = sum;
      ret = [leftI, i, rightI];
    }
  }
  return ret;
};

export default maxSumOfThreeSubarrays;
