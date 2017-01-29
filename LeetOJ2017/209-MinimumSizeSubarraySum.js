/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
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

export default minSubArrayLen;
