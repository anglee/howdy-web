const preprocess0 = (BB, w, h, x, y) => { // turn 'O' into 'B'
  if (x < 0 || y < 0 || x >= w || y >= h || BB[y][x] !== 'O') {
    return;
  }
  BB[y][x] = 'B'; // means it touches the border
  preprocess0(BB, w, h, x - 1, y);
  preprocess0(BB, w, h, x + 1, y);
  preprocess0(BB, w, h, x, y + 1);
  preprocess0(BB, w, h, x, y - 1);
};

const postprocess0 = (BB, w, h, x, y) => { // turn 'B' into 'O'
  if (x < 0 || y < 0 || x >= w || y >= h || BB[y][x] !== 'B') {
    return;
  }
  BB[y][x] = 'O';
};

const flip0 = (BB, w, h, x, y) => { // turn 'O' into 'X'
  if (x < 1 || y < 1 || x >= w - 1 || y >= h - 1 || BB[y][x] !== 'O') {
    return;
  }
  BB[y][x] = 'X';
  flip0(BB, w, h, x - 1, y);
  flip0(BB, w, h, x + 1, y);
  flip0(BB, w, h, x, y + 1);
  flip0(BB, w, h, x, y - 1);
};
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve0 = function(board) {
  const h = board.length;
  if (h <= 1) { return; }
  const w = board[0].length;
  if (w <= 1) { return; }

  for (let x = 0; x < w; ++x) {
    preprocess0(board, w, h, x, 0);
    preprocess0(board, w, h, x, h - 1);
  }
  for (let y = 0; y < h; ++y) {
    preprocess0(board, w, h, 0, y);
    preprocess0(board, w, h, w - 1, y);
  }
  for (let x = 1; x < w - 1; ++x) {
    for (let y = 1; y < h - 1; ++y) {
      flip0(board, w, h, x, y);
    }
  }
  for (let x = 0; x < w; ++x) {
    for (let y = 0; y < h; ++y) {
      postprocess0(board, w, h, x, y);
    }
  }
};

// ----------------------------------------------------

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
var solve = function(board) {
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