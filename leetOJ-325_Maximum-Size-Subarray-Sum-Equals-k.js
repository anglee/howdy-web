import _ from 'lodash';
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
  'use strict';
  const sums = new Map();
  sums.set(0, -1);
  let sum = 0;
  let ret = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sums.has(sum - k)) {
      // console.log(i, k - sum, i - sums.get(k - sum));
      ret = Math.max(ret, i - sums.get(sum - k));
    }

    if (!sums.has(sum)) {
      sums.set(sum, i);
    }
  }
  return ret;
};

export default maxSubArrayLen;
