/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram0 = function(s, t) {
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

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) { return false; }
  const counts = s.split('').reduce((map, char) => (
    map.set(char, (map.get(char) || 0) + 1)
  ), new Map());

  for (let char of t.split('')) {
    if (!counts.has(char) || counts.get(char) === 0) {
      return false;
    }
    counts.set(char, counts.get(char) - 1);
  }
  return true;
};

export default isAnagram;