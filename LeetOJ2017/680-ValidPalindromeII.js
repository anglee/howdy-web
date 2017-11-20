/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome0 = function(s) { // call stack overflow on long inputs
  const helper = (l, r, deleteCount) => {
    if (l >= r) {
      return true;
    }

    if (s[l] === s[r]) {
      return helper(++l, --r);
    } else {
      if (deleteCount === 1) {
        return false;
      }
      if (s[l] === s[r - 1] && helper(l, r - 1, 1)) {
        return true;
      }
      if (s[l + 1] === s[r] && helper(l + 1, r, 1)) {
        return true;
      }
      return false;
    }
  };

  return helper(0, s.length - 1, 0);
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome1 = function(s) {
  const isPalindromeInRange = (l, r, deleteCount) => {
    while (l < r) {
      if (s[l] === s[r]) {
        l++;
        r--;
      } else {
        if (deleteCount === 1) {
          return false;
        }
        if (s[l] === s[r - 1] && isPalindromeInRange(l, r - 1, 1)) {
          return true;
        }
        if (s[l + 1] === s[r] && isPalindromeInRange(l + 1, r, 1)) {
          return true;
        }
        return false;
      }
    }
    return true;
  };

  return isPalindromeInRange(0, s.length - 1, 0);
};

//--------------------------------------------------------------------------------------------------

const isPalindrome = (s) => {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i++] !== s[j--]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      return isPalindrome(s.substring(i, j)) ||
        isPalindrome(s.substring(i + 1, j + 1));
    }
    i++;
    j--;
  }
  return true;
};

export default validPalindrome;
