const isAlphanumeric = char => char.match(/^[a-z0-9]+$/i);


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome0 = function(s) {
  const ss = s.toLowerCase();
  const sss = ss.split('').filter(it => isAlphanumeric(it)).join('');
  let left = 0;
  let right = sss.length - 1;
  while (left < right) {
    if (sss[left] !== sss[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome1 = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (!isAlphanumeric(s[left]) && left < right) {
      left++;
    }
    while (!isAlphanumeric(s[right]) && left < right) {
      right--;
    }
    if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome2 = function(s) {
  const ss = s.toLowerCase();
  const sss = ss.split('').filter(it => isAlphanumeric(it)).join('');
  return sss.split('').reverse().join('') === sss;
};

//--------------------------------------------------------------------------------------------------

// const isAlphanumeric = char => char.match(/^[a-z0-9]+$/i);
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (!isAlphanumeric(s[l])) {
      ++l;
    } else if (!isAlphanumeric(s[r])) {
      --r;
    } else if (s[l].toLowerCase() === s[r].toLowerCase()) {
      ++l;
      --r;
    } else {
      return false;
    }
  }
  return true;

};

export default isPalindrome;
