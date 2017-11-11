const create2DArray = (h, w, value) => Array(h).fill().map(() => Array(w).fill(value));
const getReachableFromPacific = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;

  const reachables = create2DArray(m, n, false);

  const dfs = (row, col, last) => {
    if (row < 0 || col < 0 || row >= m || col >= n || reachables[row][col]) {
      return;
    }
    const current = matrix[row][col];
    if (current < last) {
      return;
    }
    reachables[row][col] = true;
    dfs(row - 1, col, current);
    dfs(row + 1, col, current);
    dfs(row, col - 1, current);
    dfs(row, col + 1, current);
  };

  for (let i = 0; i < m; ++i) {
    dfs(i, 0, Number.NEGATIVE_INFINITY);
  }
  for (let i = 0; i < n; ++i) {
    dfs(0, i, Number.NEGATIVE_INFINITY);
  }
  return reachables;
};

const getReachableFromAtlantic = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;

  const reachables = create2DArray(m, n, false);

  const dfs = (row, col, last) => {
    if (row < 0 || col < 0 || row >= m || col >= n || reachables[row][col]) {
      return;
    }
    const current = matrix[row][col];
    if (current < last) {
      return;
    }
    reachables[row][col] = true;
    dfs(row - 1, col, current);
    dfs(row + 1, col, current);
    dfs(row, col - 1, current);
    dfs(row, col + 1, current);
  };

  for (let i = 0; i < m; ++i) {
    dfs(i, n - 1, Number.NEGATIVE_INFINITY);
  }
  for (let i = 0; i < n; ++i) {
    dfs(m - 1, i, Number.NEGATIVE_INFINITY);
  }
  return reachables;
};

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  const m = matrix.length;
  if (m === 0) { return []; }
  const n = matrix[0].length;
  if (n === 0) { return []; }
  const reachableFromPacific = getReachableFromPacific(matrix);
  // console.log(reachableFromPacific);
  const reachableFromAtlantic = getReachableFromAtlantic(matrix);
  // console.log(reachableFromAtlantic);
  const ret = [];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (
        reachableFromPacific[i][j] &&
        reachableFromAtlantic[i][j]
      ) {
        ret.push([i, j]);
      }
    }
  }
  return ret;
};

export default pacificAtlantic;
