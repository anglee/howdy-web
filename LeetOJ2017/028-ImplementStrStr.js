/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr0 = function(haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; ++i) {
    let j = 0;
    for (j = 0; j < needle.length; ++j) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === needle.length) {
      return i;
    }
  }
  return -1;
};

const hashFunction = (s) => {
  let ret = 0;
  for (let i = 0; i < s.length; ++i) {
    ret += s.charCodeAt(i);
    ret %= 100000;
  }
  return ret;
};

const toCharCode = (char) => char.charCodeAt(0);

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0; // ???, I only do this for LeetOJ to pass
  }
  const hash = hashFunction(needle);

  const possibles = [];
  // preprocess
  let sum = 0;
  for (let i = 0; i < haystack.length; ++i) {
    sum += toCharCode(haystack[i]);
    if (i - needle.length >=0) {
      sum -= toCharCode(haystack[i - needle.length]);
    }
    sum %= 100000;
    if (sum === hash) {
      possibles.push(i - needle.length + 1);
    }
  }
  // go through the possibles and check
  for (let i = 0; i < possibles.length; ++i) {
    const index = possibles[i];
    let j = 0;
    for (j = 0; j < needle.length; ++j) {
      if (index + j >= haystack.length || haystack[index + j] !== needle[j]) {
        break;
      }
    }
    if (j === needle.length) {
      return index;
    }
  }

  return -1;
};

export default strStr;