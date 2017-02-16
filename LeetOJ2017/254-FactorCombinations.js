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
var getFactors = function(n) {
  return doGetFactors(2, n);
};

export default getFactors;
