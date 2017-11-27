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
var removeInvalidParentheses3 = function(s) {
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

//--------------------------------------------------------------------------------------------------

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses4 = function (s) {
  const getCountOfRightsToRemove = (s) => {
    let unmatchedLeftCount = 0;
    let countOfRightsToRemove = 0;
    for (let i = 0; i < s.length; ++i) {
      if (s[i] === '(') {
        unmatchedLeftCount++;
      } else if (s[i] === ')') {
        if (unmatchedLeftCount === 0) {
          countOfRightsToRemove++;
        } else {
          unmatchedLeftCount--;
        }
      }
    }
    return countOfRightsToRemove;
  };

  const getCountOfLeftsToRemove = (s) => {
    let unmatchedRightCount = 0;
    let countOfLeftsToRemove = 0;
    for (let i = s.length - 1; i >= 0; --i) {
      if (s[i] === ')') {
        unmatchedRightCount++;
      } else if (s[i] === '(') {
        if (unmatchedRightCount === 0) {
          countOfLeftsToRemove++;
        } else {
          unmatchedRightCount--;
        }
      }
    }
    return countOfLeftsToRemove;
  };

  const hasNoInvalidRights = (s) => {
    let count = 0;
    for (let i = 0; i < s.length; ++i) {
      const ch = s[i];
      if (ch === '(') {
        count++;
      } else if (ch === ')') {
        count--;
        if (count < 0) {
          return false;
        }
      }
    }
    return true;
  };

  const seenRights = new Set();
  const removeInvalidRights = (s, countToRemove) => {
    if (seenRights.has(s)) {
      return [];
    } else {
      seenRights.add(s);
    }
    if (countToRemove === 0 && hasNoInvalidRights(s)) {
      return [s];
    }

    const rightPositions = [];
    for (let i = 0; i < s.length; ++i) {
      if (s[i] === ')' && (i === 0 || s[i - 1] !== ')')) {
        rightPositions.push(i);
      }
    }
    const ret = [];
    rightPositions.forEach(pos => {
      const rightRemoved = s.substr(0, pos) + s.substr(pos + 1);
      ret.push(...removeInvalidRights(rightRemoved, countToRemove - 1));
    });
    return Array.from(new Set(ret));
  };


  const hasNoInvalidLefts = (s) => {
    let count = 0;
    for (let i = s.length - 1; i >= 0; --i) {
      const ch = s[i];
      if (ch === ')') {
        count++;
      } else if (ch === '(') {
        count--;
        if (count < 0) {
          return false;
        }
      }
    }
    return true;
  };

  const seenLefts = new Set();
  const removeInvalidLefts = (s, countToRemove) => {
    if (seenLefts.has(s)) {
      return [];
    } else {
      seenLefts.add(s);
    }
    if (countToRemove === 0 && hasNoInvalidLefts(s)) {
      return [s];
    }

    const leftPositions = [];
    for (let i = 0; i < s.length; ++i) {
      if (s[i] === '(' && (i === 0 || s[i - 1] !== '(')) {
        leftPositions.push(i);
      }
    }

    const ret = [];
    leftPositions.forEach(pos => {
      const leftRemoved = s.substr(0, pos) + s.substr(pos + 1);
      ret.push(...removeInvalidLefts(leftRemoved, countToRemove - 1));
    });
    return Array.from(new Set(ret));
  };

  const ret = [];
  const countOfRightsToRemove = getCountOfRightsToRemove(s);
  // console.log('countOfRightsToRemove', countOfRightsToRemove);
  const countOfLeftsToRemove = getCountOfLeftsToRemove(s);
  // console.log('countOfLeftsToRemove', countOfLeftsToRemove);
  const invalidRightsRemoved = removeInvalidRights(s, countOfRightsToRemove);
  // console.log('invalidRightsRemoved', invalidRightsRemoved);
  invalidRightsRemoved.forEach(str => {
    ret.push(...removeInvalidLefts(str, countOfLeftsToRemove));
  });
  return Array.from(new Set(ret));
};

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses5 = function (s) { // similar to removeInvalidParentheses4, different approach of removeInvalidRights and removeInvalidLefts
  const getCountOfRightsToRemove = (s) => {
    let unmatchedLeftCount = 0;
    let countOfRightsToRemove = 0;
    for (let i = 0; i < s.length; ++i) {
      if (s[i] === '(') {
        unmatchedLeftCount++;
      } else if (s[i] === ')') {
        if (unmatchedLeftCount === 0) {
          countOfRightsToRemove++;
        } else {
          unmatchedLeftCount--;
        }
      }
    }
    return countOfRightsToRemove;
  };

  const getCountOfLeftsToRemove = (s) => {
    let unmatchedRightCount = 0;
    let countOfLeftsToRemove = 0;
    for (let i = s.length - 1; i >= 0; --i) {
      if (s[i] === ')') {
        unmatchedRightCount++;
      } else if (s[i] === '(') {
        if (unmatchedRightCount === 0) {
          countOfLeftsToRemove++;
        } else {
          unmatchedRightCount--;
        }
      }
    }
    return countOfLeftsToRemove;
  };

  const hasNoInvalidRights = (s) => {
    let count = 0;
    for (let i = 0; i < s.length; ++i) {
      const ch = s[i];
      if (ch === '(') {
        count++;
      } else if (ch === ')') {
        count--;
        if (count < 0) {
          return false;
        }
      }
    }
    return true;
  };


  const unique = A => Array.from(new Set(A));
  const select = (A, count) => { // select count elements from A, DP
    let buffer = Array(A.length + 1).fill().map(()=> [[]]);
    let i = 1;
    while (i <= count) {
      const newBuffer = Array(A.length + 1).fill().map(()=> []);
      for (let j = 1; j <= A.length; ++j) {
        newBuffer[j] = newBuffer[j - 1].concat(buffer[j - 1].map(it => [...it, A[j - 1]]));
      }
      ++i;
      buffer = newBuffer;
    }
    return buffer[buffer.length - 1];
  };
  const removeChars = (s, positions) => {
    let ret = s.substring(0, positions[0]);
    for (let i = 0; i < positions.length - 1; ++i) {
      ret += s.substring(positions[i] + 1, positions[i + 1]);
    }
    ret += s.substring(positions[positions.length - 1] + 1);
    return ret;
  };
  const removeInvalidRights = (s, countToRemove) => {
    if (countToRemove === 0) {
      return [s];
    }
    const rightPositions = [];
    for (let i = 0; i < s.length; ++i) {
      if (s[i] === ')') {
        rightPositions.push(i);
      }
    }
    // console.log('rightPositions', rightPositions);
    const combinations = select(rightPositions, countToRemove);
    // console.log('combinations', combinations);
    const rightRemovedStrings = combinations.map(positions => removeChars(s, positions));
    // console.log('rightRemovedStrings', rightRemovedStrings);
    return unique(rightRemovedStrings).filter(hasNoInvalidRights)
  };


  const hasNoInvalidLefts = (s) => {
    let count = 0;
    for (let i = s.length - 1; i >= 0; --i) {
      const ch = s[i];
      if (ch === ')') {
        count++;
      } else if (ch === '(') {
        count--;
        if (count < 0) {
          return false;
        }
      }
    }
    return true;
  };

  const removeInvalidLefts = (s, countToRemove) => {
    if (countToRemove === 0) {
      return [s];
    }
    const leftPositions = [];
    for (let i = 0; i < s.length; ++i) {
      if (s[i] === '(') {
        leftPositions.push(i);
      }
    }
    const combinations = select(leftPositions, countToRemove);
    const leftRemovedStrings = combinations.map(positions => removeChars(s, positions));
    return unique(leftRemovedStrings).filter(hasNoInvalidLefts)
  };

  const ret = [];
  const countOfRightsToRemove = getCountOfRightsToRemove(s);
  // console.log('countOfRightsToRemove', countOfRightsToRemove);
  const countOfLeftsToRemove = getCountOfLeftsToRemove(s);
  // console.log('countOfLeftsToRemove', countOfLeftsToRemove);
  const invalidRightsRemoved = removeInvalidRights(s, countOfRightsToRemove);
  // console.log('invalidRightsRemoved', invalidRightsRemoved);
  invalidRightsRemoved.forEach(str => {
    ret.push(...removeInvalidLefts(str, countOfLeftsToRemove));
  });
  // console.log('invalidLeftsRemoved', ret);
  return Array.from(new Set(ret));
};



export default removeInvalidParentheses5;
