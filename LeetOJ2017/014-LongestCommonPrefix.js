const findPrefix = (s1, s2) => {
  const ret = [];
  for (let i = 0; i < s1.length && i < s2.length; ++i) {
    if (s1.charAt(i) === s2.charAt(i)) {
      ret.push(s1.charAt(i));
    } else {
      break;
    }
  }
  return ret.join('');
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return '';
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; ++i) {
    prefix = findPrefix(prefix, strs[i]);
  }
  return prefix;
};

export default longestCommonPrefix;
