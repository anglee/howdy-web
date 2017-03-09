const checkZero = (nums) => {
  let prev = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === 0 && prev === 0) { return true; }
    prev = nums[i];
  }
  return false;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  if (nums.length < 2) { return false; }
  if (k === 0) { return checkZero(nums); }

  let S = new Set([nums[0] % k]);

  for (let i = 1; i < nums.length; ++i) {
    // console.log(Array.from(S));
    const newS = new Set([nums[i] % k]);
    for (let s of S) {
      const x = (s + nums[i]) % k;
      if (x === 0) {
        return true;
      } else {
        newS.add(x);
      }
    }
    S = newS;
  }
  return false;
};

export default checkSubarraySum;