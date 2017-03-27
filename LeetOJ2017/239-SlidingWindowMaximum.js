const last = (buf) => buf[buf.length - 1].num;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const ret = [];
  const buf = [];

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    while (buf.length && last(buf) <= num) {
      buf.pop();
    }
    buf.push({ i, num });
    if (buf[0].i <= i - k) {
      buf.shift();
    }
    if (i >= k - 1) {
      const max = buf[0].num;
      ret.push(max);
    }
  }
  return ret;
};

export default maxSlidingWindow;