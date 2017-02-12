/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
  const binaries = nums.map(it => it.toString(2));
  const maxLength = Math.max(...binaries.map(it => it.length));
  let ret = 0;
  for (let i = 0; i < maxLength; ++i) {
    let ones = 0;
    for (let b of binaries) {
      if (i < b.length && b[b.length - 1 - i] === '1') {
        ++ones;
      }
    }
    let zeros = nums.length - ones;
    ret += ones * zeros;
  }
  return ret;
};

export default totalHammingDistance;
