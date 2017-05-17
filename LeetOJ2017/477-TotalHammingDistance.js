import _ from 'lodash';
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance0 = function(nums) {
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

//------------------------------------------------------------------------------------------


/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance1 = function(nums) {

  let hammingDist = 0;
  while (_.some(nums, num => num > 0)) {
    let digits = nums.map(num => num & 1);
    let onesCount = digits.reduce((a, b) => a + b, 0);
    let zerosCount = nums.length - onesCount;
    hammingDist += onesCount * zerosCount;
    nums = nums.map(num => num >> 1);
  }
  return hammingDist;
};

//------------------------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
  let hammingDist = 0;
  while (true) {
    let onesCount = nums.reduce((a, b) => a + (b & 1), 0);
    let zerosCount = nums.length - onesCount;
    hammingDist += onesCount * zerosCount;
    let done = true;
    for (let i = 0; i < nums.length; ++i) {
      if (nums[i] !== 0) {
        nums[i] = nums[i] >> 1;
        if (nums[i] !== 0) {
          done = false;
        }
      }
    }
    if (done) {
      return hammingDist;
    }
  }
};

export default totalHammingDistance;
