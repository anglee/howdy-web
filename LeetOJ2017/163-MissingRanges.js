const findRanges = (nums) => {
  const ranges = [];
  let start = null;
  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    const prev = i === 0 ? null : nums[i - 1];
    const next = i === nums.length - 1 ? null : nums[i + 1];

    if (prev === null || prev !== num - 1) {
      // this is a start
      start = num;
    }
    if (next === null || next !== num + 1) {
      // this is an end
      const end = num;
      ranges.push([start, end]);
    }
  }
  return ranges;
};

const unique = (nums) => {
  const ret = [];
  let prev = null;
  for (let num of nums) {
    if (num !== prev) {
      ret.push(num);
      prev = num;
    }
  }
  return ret;
};
const printRange = (s, e) => (s === e ? `${s}` : `${s}->${e}`);

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  const ranges = findRanges(unique(nums));
  const missingRanges = [];

  if (ranges.length === 0) {
    return [printRange(lower, upper)];
  }

  let missingRangeStart = lower;
  for (let [s, e] of ranges) {
    if (s !== missingRangeStart) {
      missingRanges.push([missingRangeStart, s - 1])
    }
    missingRangeStart = e + 1;
  }
  if (upper >= missingRangeStart) {
    missingRanges.push([missingRangeStart, upper]);
  }

  return missingRanges.map(([s, e]) => printRange(s, e));
};

export default findMissingRanges;