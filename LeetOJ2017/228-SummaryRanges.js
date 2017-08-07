/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let start = null;
  let ret = [];
  nums.forEach((num, i) => {
    const isStart = i === 0 || nums[i - 1] !== num - 1;
    const isEnd = i === nums.length - 1 || nums[i + 1] !== num + 1;
    if (isStart && isEnd) {
      ret.push(`${num}`);
    } else if (isStart) {
      start = num;
    } else if (isEnd) {
      ret.push(`${start}->${num}`);
    }
  });

  return ret;
};

export default summaryRanges;