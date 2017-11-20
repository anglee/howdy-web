/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets0 = function(nums) { // recursive
  if (nums.length === 0) { return[[]]; }
  const [head, ...tail] = nums;
  return subsets(tail).reduce((agg, it) => {
    agg.push(it, [head, ...it]);
    return agg;
  }, []);
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) { // DP
  let buffer = [[]];
  for (let i = 0; i < nums.length; ++i) {
    buffer = buffer.reduce((newBuffer, it) => {
      newBuffer.push(it, it.concat([nums[i]]));
      return newBuffer;
    }, []);
  }
  return buffer;
};

export default subsets;
