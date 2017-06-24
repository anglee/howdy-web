var removeInvalidParentheses0 = function(s) { // doesn't work
  const stack = [];
  let ret = [];
  for (let ch of s) {
    if (ch === '(') {
      stack.push(ch);
    } else if (ch === ')') {
      if (stack.length === 0) {
        // invalid, skip
        continue;
      }
      stack.pop();
    }
    ret.push(ch);
  }

  return ret.join('');
};

//--------------------------------------------------------------------------------------------------


// const reverse = (s) => s.split('').reverse().join('');
const removeCharAtI = (s, i) => s.substring(0, i) + s.substring(i + 1);

var remove = function(s, ans) {

  // from left to right, remove ')'s
  let stack = 0;
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    if (ch === '(') {
      stack++;
    }
    if (ch === ')') {
      stack--;
    }
    if (stack < 0) {
      // need to remove a ')', which one? any one that appear before i (including i)
      for (let j = 0; j <= i; ++j) {
        if (s[j] === ')') {
          if (s[j - 1] !== ')') { // only remove the first one if there is a consecutive series of '('
            remove(removeCharAtI(s, j), ans);
          }
        }
      }
      return;
    }
  }

  // if we are here, we finished removing all ')'s that would make s invalid

  // from right to left, remove '('s
  stack = 0;
  for (let i = s.length - 1; i >= 0; --i) {
    const ch = s[i];
    if (ch === ')') {
      stack++;
    }
    if (ch === '(') {
      stack--;
    }
    if (stack < 0) {
      for (let j = s.length - 1; j >= i; --j) {
        if (s[j] === '(') {
          if (s[j + 1] !== '(') {
            remove(removeCharAtI(s, j), ans);
          }
        }
      }
      return;
    }
  }

  // if we are here, we finished removing all '('s that would make s invalid
  ans.add(s);
};

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const ans = new Set();
  remove(s, ans);
  return Array.from(ans);
};

export default removeInvalidParentheses0;
