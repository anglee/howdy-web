/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const countMap = nums.reduce((map, num) => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
    return map;
  }, new Map());

  let ret = [[]];
  for (const [num, count] of countMap) {
    const next = [];
    for (var c = 0; c <= count; ++c) {
      ret.forEach((it) => {
        next.push([...it, ...Array(c).fill(num)]);
      });
    }
    ret = next;
  }
  return ret;
};

export default subsetsWithDup;
