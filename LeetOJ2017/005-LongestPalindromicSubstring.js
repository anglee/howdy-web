// import _ from 'lodash';

export const isPalindrome = (s) => {
  let i1 = 0;
  let i2 = s.length - 1;
  while (i1 < i2) {
    if (s[i1] !== s[i2]) {
      return false;
    }
    i1++;
    i2--;
  }
  return true;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome0 = function(s) { // O(n^3)
  let ret = '';
  for (let i = 0; i < s.length; ++i) {
    for (let j = i; j < s.length; ++j) {
      const substring = s.substring(i, j + 1);
      if (isPalindrome(substring) && substring.length > ret.length) {
        ret = substring;
      }
    }
  }
  return ret;
};


const findOddLengthLongestPalindrome = (s) => {
  let maxL = -1;
  let ret = '';
  for (let i = 0; i < s.length; ++i) {
    let l = 0;
    while (i - l >= 0 && i + l < s.length && s[i - l] === s[i + l]) {
      if (l > maxL) {
        maxL = l;
        ret = s.substring(i - l, i + l + 1);
      }
      l++;
    }
  }
  return ret;
};

const findEvenLengthLongestPalindrome = (s) => {
  let maxL = -1;
  let ret = '';
  for (let i = 0.5; i < s.length; ++i) {
    let l = 0.5;
    while (i - l >= 0 && i + l < s.length && s[i - l] === s[i + l]) {
      if (l > maxL) {
        maxL = l;
        ret = s.substring(i - l, i + l + 1);
      }
      l++;
    }
  }
  return ret;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) { // O(n^2)

  // return _.maxBy(
  //   [findOddLengthLongestPalindrome(s), findEvenLengthLongestPalindrome(s)],
  //   'length'
  // );

  const oddLengthLongestPalindrome = findOddLengthLongestPalindrome(s);
  const evenLengthLongestPalindrome = findEvenLengthLongestPalindrome(s);
  return oddLengthLongestPalindrome.length > evenLengthLongestPalindrome.length
    ? oddLengthLongestPalindrome
    : evenLengthLongestPalindrome;
};

export default longestPalindrome;
