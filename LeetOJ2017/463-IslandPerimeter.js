const countPerimeter = (grid, w, h, x, y) => {
  // console.log(`${x}, ${y}`);
  if (
    x < 0 ||
    y < 0 ||
    x >= w ||
    y >= h ||
    grid[y][x] === 0
  ) {
    return 0;
  }

  let ret = 0;
  if (x - 1 < 0 || grid[y][x - 1] === 0) {
    ret++;
  }
  if (y - 1 < 0 || grid[y - 1][x] === 0) {
    ret++;
  }
  if (x + 1 >= w || grid[y][x + 1] === 0) {
    ret++;
  }
  if (y + 1 >= h || grid[y + 1][x] === 0) {
    ret++;
  }
  return ret;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  const h = grid.length;
  const w = grid[0].length;
  let ret = 0;
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      ret += countPerimeter(grid, w, h, x, y);
    }
  }
  return ret;
};

export default islandPerimeter;
