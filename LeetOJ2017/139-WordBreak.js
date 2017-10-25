/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak0 = function(s, wordDict) { // recursion

  const dict = new Set(wordDict);

  const wordBreakI = (ss) => {
    if (ss.length === 0) {
      return true;
    }

    for (let i = 1; i <= ss.length; i++) {
      if (dict.has(ss.substring(0, i)) && wordBreakI(ss.substring(i))) {
        return true;
      }
    }

    return false;
  };

  return wordBreakI(s);
};

// Time complexity analysis
// O(2^n)
// because T(n) = T(n-1)+T(n-2)+T(n-3)+...+T(1)+T(0)
// Thus, suppose T(0)=T(1)=1, then
// T(2)=T(1)+T(0)=1+1=2,
// T(3)=T(0)+T(1)+T(2)=1+1+2=4,
// T(4)=1+1+2+4=8...

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak1 = function(s, wordDict) { // DP
  const dict = new Set(wordDict);
  const isWordBreakableAt = [];
  for (let i = 0; i < s.length; ++i) {
    isWordBreakableAt.push(false);
    if (dict.has(s.substring(0, i+1))) {
      isWordBreakableAt[i] = true;
    } else {
      for (let j = 0; j < i; ++j) {
        if (isWordBreakableAt[j] && dict.has(s.substring(j+1, i+1))) {
          isWordBreakableAt[i] = true;
          break;
        }
      }
    }
  }
  return isWordBreakableAt[s.length - 1];
};


const range = (i, j) => Array(j - i).fill().map((_, index) => index + i);
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) { // DP
  const dict = new Set(wordDict);
  const breakables = Array(s.length + 1).fill(false);
  breakables[0] = true;
  for (let i = 1; i <= s.length; ++i) {
    breakables[i] = range(0, i).some(j => breakables[j] && dict.has(s.substring(j, i)));
  }
  return breakables[s.length];
};

export default wordBreak;
