/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((ret, num) => {
    return ret ^ num;
  }, 0);
};

export default singleNumber;