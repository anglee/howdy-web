/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum0 = function(nums) {
  const countMap = new Map();
  for (let num of nums) {
    countMap.has(num)
      ? countMap.set(num, countMap.get(num) + 1)
      : countMap.set(num, 1);
  }
  // console.log('countMap', countMap);
  const keys = Array.from(countMap.keys()).sort((a, b) => a - b);
  // console.log(keys);
  const ret = [];
  for (let i = 0; i < keys.length; ++i) {
    const num = keys[i];
    // console.log(`num`, num);
    countMap.set(num, countMap.get(num) - 1);
    for (let j = i; j < keys.length; ++j) {
      const num2 = keys[j];
      // console.log(`num2`, num2);
      if (countMap.get(num2) > 0) {
        countMap.set(num2, countMap.get(num2) - 1);
        const num3 = 0 - num - num2;
        if (num3 >= num2 && countMap.get(num3) > 0) {
          // console.log(`num3`, num3);
          ret.push([num, num2, num3])
        }
        countMap.set(num2, countMap.get(num2) + 1);
      }
    }
    countMap.set(num, countMap.get(num) + 1);
  }
  return ret;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const moveRight = (nums, i) => { // move i to right until nums[i] is not the same (skip duplicates)
    const num = nums[i];
    while (nums[i] === num){
      i++;
    }
    return i;
  };
  const moveLeft = (nums, i) => { // move i to left until nums[i] is not the same (skip duplicates)
    const num = nums[i];
    while (nums[i] === num){
      i--;
    }
    return i;
  };

  nums.sort((a, b) => a - b);

  const ret = [];
  let i = 0;
  while (i < nums.length) {
    const target = 0 - nums[i];
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] === target) {
        ret.push([nums[i], nums[l], nums[r]]);
        l = moveRight(nums, l);
        r = moveLeft(nums, r);
      } else if (nums[l] + nums[r] < target) {
        l = moveRight(nums, l);
      } else {
        r = moveLeft(nums, r);
      }
    }
    i = moveRight(nums, i);
  }
  return ret;
};

export default threeSum;