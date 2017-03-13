

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray0 = function(nums, m) {
  // straightforward divide and conquer, not efficient because of using `slice()`

  const sum = (A) => A.reduce((total, it) => total + it, 0);

  if (m === 1) {
    return sum(nums);
  }
  if (nums.length === m) {
    return Math.max(...nums);
  }

  let minMaxSum = Number.POSITIVE_INFINITY;

  for (let i = 0; i <= nums.length - m; ++i) {
    const maxSum = Math.max(
      sum(nums.slice(0, i + 1)),
      splitArray0(nums.slice(i + 1), m - 1)
    );
    minMaxSum = Math.min(minMaxSum, maxSum);
  }
  return minMaxSum;
};

// ==============================================================

var splitArray1 = function(nums, m) {
  // same as `splitArray0`, the difference is reverse the order of the 2 slices
  // that we sum and recursive find. In `splitArray0`, we sum the first half,
  // and do recursion on the second half, while in `splitArray1` we do the opposite.

  const sum = (A) => A.reduce((total, it) => total + it, 0);

  if (m === 1) {
    return sum(nums);
  }
  if (nums.length === m) {
    return Math.max(...nums);
  }

  let minMaxSum = Number.POSITIVE_INFINITY;

  for (let len = m - 1; len <= nums.length - 1; ++len) {
    const maxSum = Math.max(
      splitArray1(nums.slice(0, len), m - 1),
      sum(nums.slice(len)),
    );
    minMaxSum = Math.min(minMaxSum, maxSum);
  }
  return minMaxSum;
};

// ==============================================================

const utils = {};

const debug = false;
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray2 = function(nums, m) {
  // like `splitArray1`, but use DP
  const { sum, range } = utils;

  const buf = [0];
  for (let i = 1; i <= nums.length; ++i) {
    buf.push(nums[i - 1] + buf[i - 1]);
  }
  let lastRow = buf;
  if (m === 1) {
    return lastRow[nums.length];
  }

  // if (debug) {
  //   console.log(1, lastRow);
  // }
  for (let mi = 2; mi < m; ++mi) {
    const row = Array(nums.length);
    for (let len = mi; len < nums.length - (m - mi - 1); ++len) {
      // if (debug) {
      //   const temp = range(mi - 1, len).map(l => {
      //     console.log(`Math.max(lastRow[${l}](=${lastRow[l]}), sum(${nums.slice(l, len)})(=${sum(nums, l, len - l)}))`);
      //     return Math.max(lastRow[l], sum(nums, l, len - l));
      //   });
      //   console.log(`m=${mi}, min of [${temp}] = ${Math.min(...temp)}`);
      // }

      row[len] = Math.min(
        ...range(mi - 1, len).map(l =>
          Math.max(lastRow[l], sum(nums, l, len - l))
        )
      );
    }
    lastRow = row;
    // if (debug) {
    //   console.log(mi, lastRow);
    // }
  }

  return Math.min(
    ...range(m - 1, nums.length).map(l =>
      Math.max(lastRow[l], sum(nums, l, nums.length - l))
    )
  );
};

utils.range = (() => {
  const doRange = (start, end) => {
    const ret = [];
    for (let i = start; i < end; ++i) {
      ret.push(i);
    }
    return ret;
  };
  const map = new Map();

  return (s, e) => {
    if (map.has(s) && map.get(s).has(e)) {
      return map.get(s).get(e);
    }
    const ret = doRange(s, e);
    if (!map.has(s)) {
      map.set(s, new Map());
    }
    if (!map.get(s).has(e)) {
      map.get(s).set(e, ret);
    }
    return ret;
  }
})();

utils.memoize = (func) => {
  const map = new Map();
  return (A, startIndex, length) => {
    if (map.has(startIndex) && map.get(startIndex).has(length)) {
      return map.get(startIndex).get(length);
    }
    const ret = func(A, startIndex, length);
    if (!map.has(startIndex)) {
      map.set(startIndex, new Map());
    }
    if (!map.get(startIndex).has(length)) {
      map.get(startIndex).set(length, ret);
    }
    return ret;
  }
};

utils.sum = utils.memoize((A, startIndex, length) => {
  let ret = 0;
  for (let i = 0; i < length; ++i) {
    ret += A[startIndex + i];
  }
  return ret;
});

// =================================================================
const isOk = (nums, x, m) => {
  let count = 1;
  let sum = 0;
  for (let num of nums) {
    if (sum + num > x) {
      sum = num;
      ++count;
    } else {
      sum += num;
    }
    if (count > m) {
      return false;
    }
  }
  return true;
};

const splitArray = (nums, m) => {

  // Answer looked up from:
  // https://discuss.leetcode.com/topic/61395/c-fast-very-clear-explanation-clean-code-solution-with-greedy-algorithm-and-binary-search
  // Binary search in the solution space
  // checking isOK in the greedy way

  const sum = A => A.reduce((total, it) => total + it, 0);
  const { max, floor } = Math;

  let lb = max(...nums);
  let ub = sum(nums);
  while (lb < ub) {
    const mid = floor((lb + ub) / 2);
    if (isOk(nums, mid, m)) {
      ub = mid;
    } else {
      lb = mid + 1;
    }
  }
  return lb;
};

export default splitArray;