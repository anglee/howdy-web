/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let maxLength = 0;
  let length = 0;
  let last = Number.POSITIVE_INFINITY;
  for (let num of nums) {
    if (num > last) {
      ++length;
    } else {
      length = 1;
    }
    maxLength = Math.max(maxLength, length);
    last = num;
  }
  return maxLength;
};

export default findLengthOfLCIS;