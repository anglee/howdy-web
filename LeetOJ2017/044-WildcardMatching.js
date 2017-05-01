/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch0 = function(s, p) { // recursive + memoize

  const memoize = (originalFunc) => {
    const map = new Map();
    return function () {
      //const key = JSON.stringify(arguments);
      const key = `${arguments[0].length}_${arguments[1].length}`; // <------ cool!
      if (map.has(key)) {
        // console.log(`cache hit key=${key}`);
        return map.get(key);
      }
      const ret = originalFunc.apply(null, arguments);
      map.set(key, ret);
      return ret;
    }
  };

  var isMatchI = memoize(function (s, p) {
    if (s.length === 0 && p.length === 0) {
      return true;
    }
    if (s.length !== 0 && p.length === 0) {
      return false;
    }
    if (p[0] !== '*') {
      if (s[0] === p[0] || s.length > 0 && p[0] === '?') {
        return isMatchI(s.substr(1), p.substr(1));
      }
    } else {
      const newP = p.substr(1);

      if (s.length === 0) {
        return isMatchI('', newP);
      }
      for (let i = 0; i < s.length; ++i) {
        if (isMatchI(s.substr(i), newP)) {
          return true;
        }
      }
      if (isMatchI('', newP)) {
        return true;
      }
    }

    return false;
  });

  return isMatchI(s, p);
};

//------------------------------------------------------------------------------------------


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch1 = function(s, p) { // recursive + memoize, minor clean up from isMatch0
  const memoize = (f) => {
    const map = new Map();
    return (s, p) => {
      const key = `${s.length}_${p.length}`; // <------ cool!
      if (map.has(key)) {
        return map.get(key);
      }
      const ret = f(s, p);
      map.set(key, ret);
      return ret;
    };
  };

  var helper = memoize(function(s, p) {

    if (s.length === 0 && p.length === 0) {
      return true;
    }

    if (p.length > 0) {
      if (p[0] === '*') {
        if (s.length > 0) {
          return (
            helper(s, p.substr(1)) ||
            helper(s.substr(1), p)
          );
        } else {
          return helper(s, p.substr(1));
        }
      } else if (p[0] === '?') {
        if (s.length > 0) {
          return helper(s.substr(1), p.substr(1));
        }
        return false;
      } else {
        if (s.length > 0 && s[0] === p[0]) {
          return helper(s.substr(1), p.substr(1));
        }
        return false;
      }
    }
    return false;
  });

  return helper(s, p);
};

//------------------------------------------------------------------------------------------


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch2 = function(s, p) { // DP, dynamic programming, space: O(s.length * p.length)

  const AA = Array(s.length + 1).fill().map(
    () => Array(p.length + 1).fill(false)
  );

  AA[0][0] = true;
  for (let i = 1; i <= p.length; ++i) {
    const ch_p = p[i - 1];
    if (ch_p === '*') {
      AA[0][i] = AA[0][i - 1];
    }
  }

  for (let j = 1; j <= s.length; ++j) {
    const ch_s = s[j - 1];
    for (let i = 1; i <= p.length; ++i) {
      const ch_p = p[i - 1];
      if (ch_p === '*') {
        AA[j][i] = AA[j][i - 1] || AA[j- 1][i];
      } else {
        if (ch_p === '?' || ch_p === ch_s) {
          AA[j][i] = AA[j- 1][i - 1];
        }
      }
    }
  }
  return AA[s.length][p.length];
};

//------------------------------------------------------------------------------------------


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) { // DP, dynamic programming, space: O(p.length)

  let A = Array(p.length + 1).fill(false);

  A[0] = true;
  for (let i = 1; i <= p.length; ++i) {
    const ch_p = p[i - 1];
    if (ch_p === '*') {
      A[i] = A[i - 1];
    }
  }

  for (let j = 1; j <= s.length; ++j) {
    const ch_s = s[j - 1];
    const nextA = Array(p.length + 1).fill(false);
    for (let i = 1; i <= p.length; ++i) {
      const ch_p = p[i - 1];
      if (ch_p === '*') {
        nextA[i] = nextA[i - 1] || A[i];
      } else {
        if (ch_p === '?' || ch_p === ch_s) {
          nextA[i] = A[i - 1];
        }
      }
    }
    A = nextA;
  }

  return A[p.length];
};

export default isMatch;
