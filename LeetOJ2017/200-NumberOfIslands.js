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
