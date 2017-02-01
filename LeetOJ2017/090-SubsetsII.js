

const subset = (countMap) => {
  if (countMap.size === 0) {
    return [[]];
  }
  const [[element, count]] = Array.from(countMap.entries()); // take the 1st entry
  countMap.delete(element);
  const ss = subset(countMap);
  const ret = [];
  for (let c = 0; c <= count; ++c) {
    ss.forEach((it) => {
      ret.push([...Array(c).fill(element), ...it]);
    });
  }
  return ret;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const countMap = new Map();
  nums.forEach((num) => {
    if (!countMap.has(num)) {
      countMap.set(num, 1);
    } else {
      countMap.set(num, countMap.get(num) + 1)
    }
  });
  return subset(countMap);
};

export default subsetsWithDup;
