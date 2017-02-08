/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let read = 0;
  let write = 0;

  let last = null;

  for (read = 0; read < nums.length; ++read) {
    const current = nums[read];
    if (current === last) {
      continue;
    }
    // current !== last
    nums[write++] = current;
    last = current;
  }
  return write;
};

export default removeDuplicates;
