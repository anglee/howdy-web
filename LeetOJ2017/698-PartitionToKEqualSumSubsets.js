/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % k !== 0) { return false; }
  const bucketSize = sum / k;
  nums.sort((a, b) => b - a);
  // console.log(nums);
  const buckets = Array(k).fill(bucketSize);
  const canFit = (i) => {
    const num = nums[i];
    if (i >= nums.length) {
      return true;
    }
    for (let j = 0; j < buckets.length; ++j) {
      // console.log(`trying to fit ${nums[i]} in to bucket ${j}`);
      if (buckets[j] >= num) {
        buckets[j] -= num;
        if (canFit(i + 1)) {
          return true;
        }
        buckets[j] += num;
      }
      // console.log(`cannot fit ${nums[i]} in to bucket ${j}`);
    }
    return false;
  };

  return canFit(0);
};

export default canPartitionKSubsets;