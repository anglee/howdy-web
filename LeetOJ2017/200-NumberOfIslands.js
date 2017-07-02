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
      x = parentMap[y][x].x;
      y = parentMap[y][x].y;
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
var numIslands = function(grid) {
  const height = grid.length;
  if (height === 0) { return 0; }
  const width = grid[0].length;
  let ret = 0;

  const isWater = (x, y) => x < 0 || y < 0 || x >= width || y >= height || grid[y][x] === '0';
  const marked = Array(height).fill().map(
    () => Array(width).fill(false)
  );
  const isMarked = (x, y) => marked[y][x];

  const mark = (x, y) => {
    if (isWater(x, y) || isMarked(x, y)) {
      return;
    }

    marked[y][x] = true;
    mark(x, y - 1);
    mark(x, y + 1);
    mark(x - 1, y);
    mark(x + 1, y);
  };

  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      if (!isWater(x, y) && !isMarked(x, y)) {
        ret++;
        mark(x, y);
      }
    }
  }
  return ret;
};

export default numIslands;
