import _ from 'lodash';

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen0 = function(nums, k) { // O(n^2)
  let maxLength = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  return maxLength;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) { // O(n)
  const sums = new Map();
  sums.set(0, -1);
  let sum = 0;
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sums.has(sum - k)) {
      const length = i - sums.get(sum - k);
      maxLength = Math.max(maxLength, length);
    }

    if (!sums.has(sum)) {
      sums.set(sum, i);
    }
  }

  return maxLength;
};

/*
  Explain of the O(n) solution:
  for each position i, if there is a subarray that ends at i sums to k,
  this means that there is at least one subarray that starts at j (j < i), ie. nums[j, i],
  and such j makes:  SUM( nums[0, j) ) + k = SUM( nums[0, i] );

  when we scan from left to right, keep all the sum of [0, x] in a map, so we can quickly
  look up if there was a subarray nums[0, x] that sums to a certain value, (e.g. SUM( nums[0, i] - k).
  If there are more than 1 x's that make subarray nums[0, x] sums to the same value, keep the
  smallest x, as it will make the subarray that sums to k longer

  Finally, note the special case of when the subarray starting at 0 can be addressed by adding
  { 0: -1 } to the map.
 */

export default maxSubArrayLen;
