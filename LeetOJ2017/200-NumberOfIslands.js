/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands0 = function(grid) { // union find
  const height = grid.length;
  if (height === 0) { return 0; }
  const width = grid[0].length;

  const isWater = (x, y) => x < 0 || y < 0 || x >= width || y >= height || grid[y][x] === '0';
  const findRoot = (x, y) => {
    while (parentMap[y][x].x !== x || parentMap[y][x].y !== y) {
      const px = parentMap[y][x].x;
      const py = parentMap[y][x].y;
      x = px;
      y = py;
    }
    return {x, y};
  };

  const parentMap = Array(height).fill().map(
    (_,y) => Array(width).fill().map(
      (_, x) =>isWater(x, y) ? ({x: null, y: null}) : ({x, y})
    )
  );
  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      if (!isWater(x, y)) {
        const rootOfLeft = isWater(x - 1, y) ? null : findRoot(x - 1, y);
        const rootOfTop = isWater(x, y - 1) ? null : findRoot(x, y - 1);
        if (rootOfLeft) {
          parentMap[y][x] = rootOfLeft;
          if (rootOfTop) {
            parentMap[rootOfTop.y][rootOfTop.x] = rootOfLeft;
          }
        } else if (rootOfTop) {
          parentMap[y][x] = rootOfTop;
        }
      }
    }
  }
  let ret = 0;
  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      const {x: px, y: py} = parentMap[y][x];
      if (px === x && py === y) {
        ret++;
      }
    }
  }
  return ret;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands1 = function(grid) {
  const h = grid.length;
  if (h === 0) { return 0; }
  const w = grid[0].length;
  if (w === 0) { return 0; }

  const visited = Array(h).fill().map(() => Array(w).fill(false));
  const dfs = (y, x) => {
    if (y < 0 || y >= h || x < 0 || x >= w || grid[y][x] === '0' || visited[y][x]) {
      return;
    }
    visited[y][x] = true;
    dfs(y - 1, x);
    dfs(y + 1, x);
    dfs(y, x + 1);
    dfs(y, x - 1);
  };

  let count = 0;
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      if (!visited[y][x] && grid[y][x] === '1') {
        dfs(y, x);
        count++;
      }
    }
  }
  return count;
};

// export default numIslands1;

//--------------------------------------------------------------------------------------------------


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const height = grid.length;
  if (height === 0) { return 0; }
  const width = grid[0].length;


  const isWater = (x, y) => x < 0 || y < 0 || x >= width || y >= height || grid[y][x] === '0';
  const marked = Array(height).fill().map(
    () => Array(width).fill(false)
  );
  const isMarked = (x, y) => marked[y][x];

  const countAndMark = (x, y) => {
    if (isWater(x, y) || isMarked(x, y)) {
      return 0;
    }

    marked[y][x] = true;
    countAndMark(x, y - 1);
    countAndMark(x, y + 1);
    countAndMark(x - 1, y);
    countAndMark(x + 1, y);
    return 1;
  };

  let count = 0;
  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      count += countAndMark(x, y);
    }
  }
  return count;
};

export default numIslands;
