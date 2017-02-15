/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const without = (nums, it) => {
  const index = nums.indexOf(it);
  return [...nums.slice(0, index), ...nums.slice(index + 1)];
};

const doPermute = (prefix, nums) => {
  if (nums.length === 0) {
    return [prefix];
  }
  return nums.reduce((ret, it) => ret.concat(doPermute(prefix.concat(it), without(nums, it))), []);
};

var permute = (nums) => doPermute([], nums);

export default permute;