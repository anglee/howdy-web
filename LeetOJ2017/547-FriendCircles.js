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
var findCircleNum0 = function(M) { // time: O(n ^ 2)
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
var findCircleNum = function(M) { // union find, time: O(n ^ 3)
  const n = M.length;
  const parents = Array(n).fill(null);
  const find = (i) => { // get parent(root)
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
        const parentOfJ = find(j);
        const parentOfI = find(i);
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
