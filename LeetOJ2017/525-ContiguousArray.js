/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  const firsts = new Map();
  firsts.set(0, -1);
  let count = 0;
  let maxLength = 0;

  nums.forEach((x, i) => {
    count += (x === 1 ? 1 : -1);
    if (!firsts.has(count)) {
      firsts.set(count, i);
    } else {
      const length = i - firsts.get(count);
      maxLength = Math.max(maxLength, length);
    }
  });
  return maxLength;
};

export default findMaxLength;
