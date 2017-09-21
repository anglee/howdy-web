/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const data = nums.map(num => ({
    lisCount: 1,
    lisLength: 1,
  }));
  let maxLisLength = 1;
  for (let i = 1; i < nums.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        if (data[j].lisLength + 1 > data[i].lisLength) {
          data[i].lisLength = data[j].lisLength + 1;
          data[i].lisCount = data[j].lisCount;
        } else if (data[j].lisLength + 1 === data[i].lisLength) {
          data[i].lisCount += data[j].lisCount;
        }
      }
    }
    if (data[i].lisLength > maxLisLength) {
      maxLisLength = data[i].lisLength;
    }
  }
  let ret = 0;
  for (let i = 0; i < data.length; ++i) {
    if (data[i].lisLength === maxLisLength) {
      ret += data[i].lisCount;
    }
  }
  return ret;
};

export default findNumberOfLIS;