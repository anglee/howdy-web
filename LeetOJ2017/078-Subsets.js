/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (nums.length === 0) { return[[]]; }
  const [head, ...tail] = nums;
  return subsets(tail).reduce((agg, it) => {
    agg.push(it, [head, ...it]);
    return agg;
  }, []);
};

export default subsets;