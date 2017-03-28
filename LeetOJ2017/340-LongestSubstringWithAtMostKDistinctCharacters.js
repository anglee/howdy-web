const countDistinctChars = s => {
  const set = new Set();
  for (let ch of s) {
    set.add(ch);
  }
  return set.size;
};
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct0 = function(s, k) {

  let head = 0;
  let tail = 0;
  let ret = 0;
  while (head < s.length) {
    const ss = s.substring(tail, head + 1);
    const distinctCharCount = countDistinctChars(ss);
    if (distinctCharCount <= k) {
      ret = Math.max(ret, head - tail + 1);
      head++;
    } else {
      tail++;
    }
  }

  return ret;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  let head = 0;
  let tail = 0;
  let ret = 0;
  let runningCountsMap = new Map();
  runningCountsMap.set(s[head], 1);
  let distinctCharCount = 1;
  while (head < s.length && tail < s.length) {
    if (distinctCharCount <= k) {
      ret = Math.max(ret, head - tail + 1);
      head++;
      if (head < s.length) {
        const ch = s[head];
        if (runningCountsMap.has(ch) && runningCountsMap.get(ch) !== 0) {
          runningCountsMap.set(ch, runningCountsMap.get(ch) + 1);
        } else {
          runningCountsMap.set(ch, 1);
          distinctCharCount++;
        }
      }
    } else {
      const ch = s[tail];
      runningCountsMap.set(ch, runningCountsMap.get(ch) - 1);
      if (runningCountsMap.get(ch) === 0) {
        distinctCharCount--;
      }
      tail++;
    }
  }

  return ret;
};

export default lengthOfLongestSubstringKDistinct;