/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const height = grid.length;
  if (height === 0) { return 0; }
  const width = grid[0].length;
  let ret = 0;

  const marked = [];
  for (let y = 0; y < height; ++y) {
    const row = [];
    marked.push(row);
    for (let x = 0; x < width; ++x) {
      row.push(grid[y][x] !== '1');
    }
  }

  const isMarked = (x, y) => marked[y][x];
  const mark = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height || isMarked(x, y)) {
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
      if (grid[y][x] === '1' && !isMarked(x, y)) {
        ret++;
        mark(x, y);
      }
    }
  }
  return ret;
};

export default numIslands;
