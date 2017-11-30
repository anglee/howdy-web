/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const counts = {};
  for (let char of s) {
    if (!counts[char]) {
      counts[char] = 1;
    } else {
      counts[char]++;
    }
  }

  for (let i = 0; i < s.length; ++i) {
    if (counts[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

export default firstUniqChar;
