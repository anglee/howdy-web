/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) { return false; }
  const counts = {};
  for (let i = 0; i < s.length; ++i) {
    counts[s[i]] = counts[s[i]] == undefined ? 1 : counts[s[i]] + 1;
    counts[t[i]] = counts[t[i]] == undefined ? -1 : counts[t[i]] - 1;
  }
  for (let key in counts) {
    if (counts[key] !== 0) {
      return false;
    }
  }
  return true;
};

export default isAnagram;