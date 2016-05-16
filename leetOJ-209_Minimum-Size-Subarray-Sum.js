/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  const buf = []; // init to zero
  for (var k = 0; k < nums.length; ++k) {
    buf.push(0);
  }
  for (var len = 1; len <= nums.length; len++) {
    for (var i = 0; i + len - 1 < nums.length; i++) {
      buf[i] += nums[i + len - 1];
      if (buf[i] >= s) {
        return len;
      }
    }
  }
  return 0;
};

export default minSubArrayLen;