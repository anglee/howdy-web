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
var longestCommonPrefix0 = function(strs) {
  if (strs.length == 0) {
    return '';
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; ++i) {
    prefix = findPrefix(prefix, strs[i]);
  }
  return prefix;
};

//--------------------------------------------------------------------------------------------------

const _ = {
  every: (A, f) => {
    for (let i = 0; i < A.length; ++i) {
      if (f(A[i]) === false) {
        return false;
      }
    }
    return true;
  }
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let i = 0;
  let ret = '';
  while (true) {
    if (i >= strs[0].length) {
      break;
    }

    const targetChar = strs[0][i];
    if (_.every(strs, str => i <= str.length && str[i] === targetChar)) {
      ret += targetChar;
      i++;
    } else {
      break;
    }
  }
  return ret;
};

export default longestCommonPrefix;
