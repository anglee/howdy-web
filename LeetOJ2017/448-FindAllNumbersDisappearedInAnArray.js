/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const k = nums.length;
  nums.forEach(num => {
    const i = Math.abs(num) - 1;
    nums[i] = Math.abs(nums[i]) * -1;
  });
  const ret = [];
  for (let i = 0; i < k; ++i) {
    if (nums[i] > 0) {
      ret.push(i + 1);
    }
  }
  return ret;
};

export default findDisappearedNumbers;