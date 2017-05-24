const doGetFactors0 = (start, n) => {
  if (start > n) { return[]; }
  const ret = [];
  for (let i = start; i*i <= n; ++i) {
    if (n % i === 0) {
      const facts = doGetFactors0(i, n / i);
      facts.forEach(fs => fs.unshift(i));
      ret.push(...facts);
    }
  }
  ret.push([n]);
  return ret;
};

/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors0 = function(n) {
  const facts = doGetFactors0(2, n);
  // remove last, which, if exists, is [n]
  facts.pop();
  return facts;
};

//-------------------------------------------------------------
const doGetFactors1 = (prevs, start, n, ret) => {
  for (let i = start; i*i <= n; ++i) {
    if (n % i === 0) {
      ret.push([...prevs, i, n / i]);
      doGetFactors1([...prevs, i], i, n / i, ret);
    }
  }
};

/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors1 = function(n) {
  const ret = [];
  doGetFactors1([], 2, n, ret);
  return ret;
};

//-------------------------------------------------------------
const doGetFactors = (start, n) => {
  const ret = [];
  for (let i = start; i*i <= n; ++i) {
    if (n % i === 0) {
      ret.push([i, n / i]);
      ret.push(
        ...doGetFactors(i, n / i).map(fs => { fs.unshift(i); return fs; })
      );
    }
  }
  return ret;
};

/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors2 = function(n) {
  return doGetFactors(2, n);
};

//--------------------------------------------------------------------------------------------------

const memoize = (f) => {
  const map = new Map();
  return (n, i = 2) => {
    if (!map.has(n)) {
      map.set(n, new Map());
    }
    if (map.get(n).has(i)) {
      return map.get(n).get(i);
    }
    const ret = f(n, i);
    map.get(n).set(i, ret);
    return ret;
  }
};

const helper = memoize((n, i = 2) => {
  const ret = [[n]];
  for (; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      ret.push(
        ...helper(n / i, i).map(it => [i, ...it])
      )
    }
  }
  return ret;
});
/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
  const ret = helper(n);
  ret.shift();
  return ret;
};

export default getFactors;
