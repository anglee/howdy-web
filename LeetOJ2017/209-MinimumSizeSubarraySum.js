/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen0 = function(s, nums) {
  let ret = null;
  const buf = [];
  for (let j = 0; j < nums.length; ++j) {
    buf.push(0);
    for (let i = buf.length - 1; i >=0; --i) {
      buf[i] += nums[j];
      if (buf[i] >= s) {
        if (ret === null || j - i + 1 < ret ) {
          ret = j - i + 1;
        }
        break;
      }
    }
  }
  return ret ? ret : 0;
};

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen1 = function(s, nums) {
  let head = 0;
  let tail = 0;
  let sum = nums[0];
  // console.log(`sum =`, sum);
  let minLength = sum >= s ? 1 : Number.POSITIVE_INFINITY;

  while (head < nums.length) {

    if (sum < s) {
      head++;
      if (head < nums.length) {
        sum += nums[head];
      }
      // console.log(`head moved to ${head}, sum =`, sum);
    } else {
      tail++;
      sum -= nums[tail - 1];
      // console.log(`tail moved to ${tail}, sum =`, sum);
    }

    if (sum >= s) {
      const length = head - tail + 1;
      minLength = Math.min(minLength, length);
    }
  }

  return Number.isFinite(minLength) ? minLength : 0;
};

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen2 = function(s, nums) {
  if (nums.length === 0) {
    return 0;
  }

  let head = 0;
  let tail = 0;
  let sum = nums[head];
  let minLength = Number.POSITIVE_INFINITY;

  while (head < nums.length) {
    while (sum < s) {
      sum += nums[++head];
    }

    while (sum >= s) {
      minLength = Math.min(minLength, head - tail + 1);
      sum -= nums[tail++];
    }
  }

  return Number.isFinite(minLength) ? minLength : 0;
};

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen3 = function(s, nums) {
  if (nums.length === 0) {
    return 0;
  }

  let tail = 0;
  let sum = 0;
  let minLength = Number.POSITIVE_INFINITY;
  for (let head = 0; head < nums.length; ++head) {
    sum += nums[head];
    while (sum >= s && tail <= head) {
      minLength = Math.min(minLength, head - tail + 1);
      sum -= nums[tail++];
    }
  }
  return Number.isFinite(minLength) ? minLength : 0;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let sum = 0;
  let sums = new Map();
  sums.set(-1, 0);
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    sums.set(i, sum);
  }

  let ret = nums.length + 1;
  for (let head = 0, tail = 0; head < nums.length; ++head) {
    while (sums.get(head) - sums.get(tail - 1) >= s) {
      ret = Math.min(ret, head - tail + 1);
      tail++;
    }
  }
  return ret === nums.length + 1 ? 0 : ret;
};

export default minSubArrayLen;
