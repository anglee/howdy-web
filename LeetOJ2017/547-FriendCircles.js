const dfs = (i, M, isVisited) => {
  if (isVisited[i]) { return 0; }
  const n = M.length;
  isVisited[i] = true;
  for (let j = 0; j < n; ++j) {
    if (M[i][j] === 1) {
      dfs(j, M, isVisited);
    }
  }
  return 1;
};

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum0 = function(M) {
  const n = M.length;
  const isVisited = Array(n).fill(false);
  let ret = 0;
  for (let i = 0; i < n; ++i) {
    ret += dfs(i, M, isVisited)
  }
  return ret;
};

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) { // union find
  const n = M.length;
  const parents = Array(n).fill(null);
  const getParentOf = (i) => { // find
    let node = i;
    while (parents[node] !== null) {
      node = parents[node];
    }
    return node;
  };
  let ret = n;
  for (let j = 0; j < n; ++j) {
    for (let i = j + 1; i < n; ++i) {
      if (M[j][i] === 1) {
        const parentOfJ = getParentOf(j);
        const parentOfI = getParentOf(i);
        if (parentOfI !== parentOfJ) {
          parents[parentOfI] = parentOfJ; // union
          ret--;
        }
      }
    }
  }
  return ret;
};

export default findCircleNum;
