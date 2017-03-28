/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak0 = function(s, wordDict) {
  const ret = [];
  const wordSet = new Set(wordDict);
  const helper = (prefix, remaining) => {
    if (remaining.length === 0) {
      ret.push(prefix);
    }
    for (let len = 1; len <= remaining.length; ++len) {
      const word = remaining.substr(0, len);
      if (wordSet.has(word)) {
        if (prefix !== '') {
          helper(`${prefix} ${word}`, remaining.substr(len));
        } else {
          helper(`${word}`, remaining.substr(len));
        }
      }
    }
  };
  helper('', s);
  return ret;
};


const memoize = (f) => {
  const map = new Map();
  return (s) => {
    if (map.has(s)) {
      return map.get(s);
    }
    const ret = f(s);
    map.set(s, ret);
    return ret;
  }
};
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak1 = function(s, wordDict) {

  const wordSet = new Set(wordDict);

  const helper = memoize((s) => {
    const ret = [];
    for (let len = 1; len <= s.length; ++len) {
      const word = s.substr(0, len);
      if (wordSet.has(word)) {
        if (len === s.length) {
          ret.push(word);
        } else {
          const rest = helper(s.substr(len));
          rest.forEach((str) => {
            ret.push(`${word} ${str}`);
          });
        }
      }
    }
    return ret;
  });

  return helper(s);
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const wordSet = new Set(wordDict);
  const buf = [null];
  for (let j = 1; j <= s.length; ++j) {
    const buf_j = [];
    for (let i = 0; i < j; ++i) {
      const word = s.substring(i, j);
      if (wordSet.has(word)) {
        if (i === 0) {
          buf_j.push(word)
        } else {
          buf[i].forEach(str => { buf_j.push(`${str} ${word}`); });
        }
      }
    }
    buf.push(buf_j);
  }
  return buf[s.length];
};

export default wordBreak;