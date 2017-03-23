const longestSubstringStartWithIndex = (s, i, k) => {
  let ret = 0;
  const freqMap = new Map();
  const lessThanKSet = new Set();

  for (let len = 1; i + len <= s.length; ++len) {
    const ch = s[i + len - 1];

    if (!freqMap.has(ch)) {
      freqMap.set(ch, 0);
    }
    const freq = freqMap.get(ch) + 1;
    freqMap.set(ch, freq);

    if (freq >= k) {
      lessThanKSet.delete(ch);
    } else {
      lessThanKSet.add(ch);
    }

    if (lessThanKSet.size === 0) {
      ret = len;
    }
  }
  return ret;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) { // O(n ^2)
  let ret = 0;
  for (let i = 0; i < s.length && ret < s.length - i; ++i) {
    ret = Math.max(ret, longestSubstringStartWithIndex(s, i, k));
  }
  return ret;
};

//------------------------------------------------------------------------------------------

const _ = {
  countBy: (s) => {
    const ret = {};
    for (let ch of s) {
      ret[ch] = (ret.hasOwnProperty(ch) ? ret[ch] : 0) + 1;
    }
    return ret;
  },
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  if (s.length < k) {
    return 0;
  }
  const countMap = _.countBy(s);
  const invalidChars = Object.keys(countMap).filter(char => countMap[char] < k);
  const substrings = s.split(new RegExp(`[${invalidChars.join()}]+`, 'g')).filter(it => it.length > 0);
  if (substrings.length === 1) {
    return substrings[0].length;
  }
  return Math.max(0, ...substrings.map(ss => longestSubstring(ss, k)));
};

export default longestSubstring;