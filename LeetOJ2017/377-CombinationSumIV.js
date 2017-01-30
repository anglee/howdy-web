/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const buf = [];
  for (let i = 0; i <= target; ++i) {
    buf.push(0);

    for (let j = 0; j < nums.length; ++j) {
      if (i === nums[j]) {
        buf[i]++;
      }
      if (i - nums[j] > 0) {
        buf[i] += buf[i - nums[j]];
      }
    }
  }

  return buf[target];
};

export default combinationSum4;
