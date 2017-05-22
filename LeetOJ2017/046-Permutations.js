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

//export default permute;

//------------------------------------------------------------------------------------------


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const doPermute = (ret, prefix, digitsSet) => {
    if (prefix.length === nums.length) {
      ret.push(prefix.slice(0));
    }
    Array.from(digitsSet).forEach(digit => {
      digitsSet.delete(digit);
      prefix.push(digit);
      doPermute(ret, prefix, digitsSet);
      prefix.pop();
      digitsSet.add(digit);
    });
  };

  const ret = [];
  doPermute(ret, [], new Set(nums));
  return ret;
};

export default permute;