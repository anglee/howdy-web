const range = (i, j) => {
  const ret = [];
  for (let x = i; x < j; ++x) {
    ret.push(x);
  }
  return ret;
};
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine0 = function(n, k) {
  if (n === k) {
    return [range(1, n + 1)];
  }
  if (k === 0) {
    return [[]];
  }
  return [
    ...combine0(n - 1, k - 1).map(it => [n, ...it]),
    ...combine0(n - 1, k)
  ];
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) { // DP
  let buffer0 = new Array(n).fill([[]]);
  let buffer1 = new Array(n).fill([]);

  for (let ki = 1; ki <= k; ++ki) {
    buffer1[ki] = [range(1, ki + 1)];
    for (let ni = ki + 1; ni < n; ++ni) {
      buffer1[ni] = [
        ...buffer0[ni - 1].map(it => [...it, ni]),
        ...buffer1[ni - 1]
      ];
    }
    if (ki !== k) {
      buffer0 = buffer1;
      buffer1 = new Array(n).fill([]);
    }
  }
  return [
    ...buffer0[n - 1].map(it => [...it, n]),
    ...buffer1[n - 1]
  ];
};

export default combine;