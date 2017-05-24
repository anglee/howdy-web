/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  const countMap = {};
  s.split('').forEach(ch => {
    countMap[ch] = countMap[ch] ? countMap[ch] + 1 : 1;
  });
  let oddCount = 0;
  for (let key in countMap) {
    if (countMap[key] % 2 === 1) {
      ++oddCount;
      if (oddCount > 1) {
        return false;
      }
    }
  }
  return true;
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  const set = new Set();
  for (let char of s.split('')) {
    if (set.has(char)) {
      set.delete(char);
    } else {
      set.add(char);
    }
  }
  return set.size <= 1;
};

export default canPermutePalindrome;