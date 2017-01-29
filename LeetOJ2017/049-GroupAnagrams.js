const computeKey = (s) => s.split('').sort().join('');

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  for (let str of strs) {
    const key = computeKey(str);
    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }
  return Array.from(map.values());
};

export default groupAnagrams;