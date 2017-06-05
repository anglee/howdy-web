const getWidthAndHeight = board => {
  const h = board.length;
  const w = h === 0 ? 0 : board[0].length;
  return { h, w };
};
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve0 = function(board) { // DFS, easier to cause call stack overflow
  const { w, h } = getWidthAndHeight(board);
  if (w === 0 || h === 0) { return; }
  const visit = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h || board[y][x] !== 'O') {
      return;
    }
    board[y][x] = 'B'; // meaning it touches the border
    visit(x - 1, y);
    visit(x + 1, y);
    visit(x, y - 1);
    visit(x, y + 1);
  };
  for (let x = 0; x < w; ++x) {
    visit(x, 0);
    visit(x, h - 1);
  }
  for (let y = 0; y < h; ++y) {
    visit(0, y);
    visit(w - 1, y);
  }
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      board[y][x] = (board[y][x] === 'B') ? 'O' : 'X';
    }
  }
};

//--------------------------------------------------------------------------------------------------

const process = (BB, w, h, ix, iy, fromCh, toCh) => {
  const q = [{ x: ix, y: iy }];
  while (q.length > 0) {
    const { x, y } = q.shift();
    if (x < 0 || y < 0 || x >= w || y >= h) {
      continue;
    }
    if (BB[y][x] === fromCh) {
      BB[y][x] = toCh;
      q.push({ x: x - 1, y: y });
      q.push({ x: x + 1, y: y });
      q.push({ x: x, y: y - 1 });
      q.push({ x: x, y: y + 1 });
    }
  }
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) { // BFS, less likely to cause call stack overflow
  const h = board.length;
  if (h <= 1) { return; }
  const w = board[0].length;
  if (w <= 1) { return; }

  for (let x = 0; x < w; ++x) {
    process(board, w, h, x, 0, 'O', 'B');
    process(board, w, h, x, h - 1, 'O', 'B');
  }
  for (let y = 0; y < h; ++y) {
    process(board, w, h, 0, y, 'O', 'B');
    process(board, w, h, w - 1, y, 'O', 'B');
  }
  for (let x = 1; x < w - 1; ++x) {
    for (let y = 1; y < h - 1; ++y) {
      process(board, w, h, x, y, 'O', 'X');
    }
  }
  for (let x = 0; x < w; ++x) {
    for (let y = 0; y < h; ++y) {
      if (board[y][x] === 'B'){
        board[y][x] = 'O';
      }
    }
  }
};
export default solve;