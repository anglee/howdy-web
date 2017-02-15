const doPermute = (pre, nums, ret) => {
  if (nums.size === 0) {
    ret.push(pre);
  }
  nums.forEach((num) => {
    const set = new Set(nums);
    set.delete(num);
    doPermute([...pre, num], set, ret);
  });
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ret = [];
  doPermute([], new Set(nums), ret);
  return ret;
};

export default permute;