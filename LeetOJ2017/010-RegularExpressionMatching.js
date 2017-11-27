/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch0 = function(s, p) {
  if (s.length === 0 && p.length === 0) {
    return true;
  }
  if (p.length === 0) {
    return false;
  }
  if (p.length >= 2 && p[1] === '*') {
    if (p[0] === '.') {
      return (
        isMatch0(s, p.substr(2)) || (
          (s.length >= 1) && (
            isMatch0(s.substr(1), p.substr(2)) || isMatch0(s.substr(1), p)
          )
        )
      );
    } else {
      return (
        isMatch0(s, p.substr(2)) || (
          (s.length >= 1 && s[0] === p[0]) && (
            isMatch0(s.substr(1), p.substr(2)) || isMatch0(s.substr(1), p)
          )
        )
      );
    }
  } else {
    if (p[0] === '.') {
      return s.length >= 1 && isMatch0(s.substr(1), p.substr(1));
    } else {
      return s.length >= 1 && s[0] === p[0] && isMatch0(s.substr(1), p.substr(1));
    }
  }
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch1 = function(s, p) {
  if (p.length === 0 && s.length === 0) {
    return true;
  }
  if (p.length === 0) {
    return false;
  }
  if (p.length >= 2 && p[1] === '*') {
    if (s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
      return isMatch(s.substring(1), p) || isMatch(s, p.substring(2));
    }
    return isMatch(s, p.substring(2));
  } else {
    if (s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
      return isMatch(s.substring(1), p.substring(1));
    }
    return false;
  }
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch2 = function(s, p) { // memoize base on keys composed of s.length and p.length
  const memoize = (f) => {
    const resultMap = new Map();
    return (s, p) => {
      const key = `${s.length} ${p.length}`;
      if (resultMap.has(key)) {
        // console.log('hit cache', key);
        return resultMap.get(key);
      }
      const ret = f(s, p);
      resultMap.set(key, ret);
      return ret;
    };
  };

  const isMatchI = memoize(function(s, p) {
    if (p.length === 0) {
      return s.length === 0;
    }
    if (p[1] !== '*') {
      if (s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
        return isMatchI(s.substring(1), p.substring(1));
      }
      return false;
    } else {
      if (s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
        return isMatchI(s.substring(1), p) || isMatchI(s, p.substring(2));
      }
      return isMatchI(s, p.substring(2));
    }
  });
  return isMatchI(s, p);
};

//--------------------------------------------------------------------------------------------------

const tokenize = (p) => { // tokenize a regex pattern, e.g. ab*c is turned into ['a', 'b*', 'c'];
  const tokens = [];
  for (let i = 0; i < p.length; ++i) {
    if (i + 1 < p.length && p[i + 1] === '*') {
      tokens.push(p.substr(i, 2));
      ++i;
    } else {
      tokens.push(p[i]);
    }
  }
  return tokens;
};

const create2DArray = (h, w, initvalue) =>
  Array(h).fill().map(() => Array(w).fill(initvalue));

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) { // DP
  const pTokens = [''].concat(tokenize(p));
  const sTokens = [''].concat(s.split(''));
  const h = sTokens.length;
  const w = pTokens.length;
  const buffer = create2DArray(sTokens.length, pTokens.length, false);
  for (let y = 0; y < h; ++y) {
    const sToken = sTokens[y];
    for (let x = 0; x < w; ++x) {
      const pToken = pTokens[x];
      if (pToken.length !== 2) {
        if (x === 0 && y === 0) {
          buffer[0][0] = true;
        } else if (x === 0 || y === 0) {
          buffer[y][x] = false;
        } else {
          buffer[y][x] = buffer[y - 1][x - 1] && (pToken === '.' || pToken === sToken);
        }
      } else { // pToken.length === 2
        if (pToken[0] === '.' || pToken[0] === sToken) {
          buffer[y][x] = (x > 0 && buffer[y][x - 1]) || (y > 0 && buffer[y - 1][x]);
        } else {
          buffer[y][x] = (x > 0 && buffer[y][x - 1]);
        }
      }
    }
  }
  return buffer[h - 1][w - 1];
};

export default isMatch1;
