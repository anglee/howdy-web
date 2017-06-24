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
          if (s[j - 1] !== ')') { // only remove the first one if there is a consecutive series of ')'
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

// DFS, http://blog.csdn.net/qq508618087/article/details/50408894
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses1 = function(s) {
  const ans = new Set();
  remove(s, ans);
  return Array.from(ans);
};

//--------------------------------------------------------------------------------------------------

const isValid = (s) => {
  let count = 0;
  for (let ch of s) {
    if (ch === '(') {
      count++;
    } else if (ch === ')') {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count === 0;
};

// BFS
// Basically, try start with s,
// and then all substr with length s.length - 1
// and then all substr with length s.length - 2
// ...
// and so on so forth
// when generating substring, there will be duplicates,
// so use a Set to keep all the ones that are seen
// also, once we know how long a valid substring is
// we don't want to process any substring that is shorter than the one we already found.
// reference:
// https://discuss.leetcode.com/topic/28827/share-my-java-bfs-solution/14
// http://www.cnblogs.com/grandyang/p/4944875.html
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses2 = function(s) {
  const seen = new Set();
  const q = [s];
  const ret = [];
  let lengthOfValidOutput = null;
  while (q.length > 0) {
    const str = q.shift();
    if (seen.has(str)) {
      continue;
    } else {
      seen.add(str);
    }

    if (lengthOfValidOutput !== null && str.length < lengthOfValidOutput) {
      continue;
    }

    if (isValid(str)) {
      ret.push(str);
      if (lengthOfValidOutput === null) {
        lengthOfValidOutput = str.length;
      }
      continue;
    }

    if (lengthOfValidOutput !== null && str.length === lengthOfValidOutput) {
      continue;
    }

    for (let i = 0; i < str.length; ++i) {
      if (str[i] === '(' || str[i] === ')') {
        q.push(str.substring(0, i) + str.substring(i + 1));
      }
    }
  }
  return ret;
};

//--------------------------------------------------------------------------------------------------


// Improved BFS, add less to the queue
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const seen = new Set();
  const q = [s];
  const ret = [];
  let lengthOfValidOutput = null;
  while (q.length > 0) {
    const str = q.shift();
    if (seen.has(str)) {
      continue;
    } else {
      seen.add(str);
    }
    if (str.length < lengthOfValidOutput) {
      continue;
    }

    let count = 0;
    for (let i = 0; i < str.length; ++i) {
      if (str[i] === '(') {
        count++;
      } else if (str[i] === ')') {
        count--;
      }
      if (count < 0) {
        for (let j = 0; j <= i; ++j) {
          if (str[j] === ')') {
            q.push(str.substring(0, j) + str.substring(j + 1));
          }
        }
        break;
      }
    }
    if (count > 0) {
      for (let j = 0; j < str.length; ++j) {
        if (str[j] === '(') {
          q.push(str.substring(0, j) + str.substring(j + 1));
        }
      }
    }

    if (count === 0) { // count === 0, is valid
      ret.push(str);
      if (lengthOfValidOutput === null) {
        lengthOfValidOutput = str.length;
      }
    }
  }
  return ret;
};

export default removeInvalidParentheses;
