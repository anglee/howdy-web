/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let read = 0;
  let write = 0;

  let last = null;
  let dupCount = 0;

  for (read = 0; read < nums.length; ++read) {
    const current = nums[read];

    if (current === last) {
      dupCount++;
      if (dupCount <= 2) {
        nums[write++] = current;
      }
    } else {
      nums[write++] = current;
      last = current;
      dupCount = 1;
    }
  }
  return write;
};

export default removeDuplicates;
