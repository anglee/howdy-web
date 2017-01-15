
export const hasRepeat = s => {
  const appearedChars = new Set();
  for (let char of s) {
    if (appearedChars.has(char)) {
      return true;
    }
    appearedChars.add(char);
  }
  return false;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring0 = function(s) { // n^3

  let maxLength = 0;
  for (let i = 0; i < s.length - 1; ++i) {
    for (let j = i; j < s.length; ++j) {
      const length = j - i + 1;
      if (length > maxLength && !hasRepeat(s.substr(i, j + 1))) {
        maxLength = length;
      }
    }
  }
  return maxLength;
};


const maxLengthOfLongestStartingAtIndex = (s, index) => {
  const start = index;
  const appearedChars = new Set();
  for (let end = start; end < s.length; ++end) {
    const char = s[end];
    if (appearedChars.has(char)) {
      return (end - 1) - start + 1;
    }
    appearedChars.add(char);
  }
  return s.length - start;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) { // n^2
  let maxLength = 0;
  for (let start = 0; start < s.length; ++start) {
    const maxLengthStartingWithIndex = maxLengthOfLongestStartingAtIndex(s, start);
    // console.log('maxLengthStartingWithIndex', start, maxLengthStartingWithIndex);
    if (maxLengthStartingWithIndex > maxLength) {
      maxLength = maxLengthStartingWithIndex;
    }
  }
  return maxLength;
};

export default lengthOfLongestSubstring;
