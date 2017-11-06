const shouldMarkHorizontal = (board, width, height, x, y) => {
  if (x + 2 < width && board[y][x] === board[y][x + 1] && board[y][x] === board[y][x + 2]) {
    return true;
  }
  return false;
};
const shouldMarkVertical = (board, width, height, x, y) => {
  if (y + 2 < height && board[y][x] === board[y + 1][x] && board[y][x] === board[y + 2][x]) {
    return true;
  }
  return false;
};

const markVertical = (board, width, height, marked, x, y) => {
  const target = board[y][x];
  let iy = y;
  while (iy < height && board[iy][x] === target) {
    marked[iy++][x] = true;
  }
};
const markHorizontal = (board, width, height, marked, x, y) => {
  const target = board[y][x];
  let ix = x;
  while (ix < width && board[y][ix] === target) {
    marked[y][ix++] = true;
  }
};

const findVertical = (board, width, height) => {
  const marked = Array(height).fill().map(() => Array(width).fill(false));
  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      if (board[y][x] === 0 || marked[y][x]) {
        continue;
      }
      if (shouldMarkVertical(board, width, height, x, y)) {
        markVertical(board, width, height, marked, x, y);
      }
    }
  }
  return marked;
};

const findHorizontal = (board, width, height) => {
  const marked = Array(height).fill().map(() => Array(width).fill(false));
  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      if (board[y][x] === 0 || marked[y][x]) {
        continue;
      }
      if (shouldMarkHorizontal(board, width, height, x, y)) {
        markHorizontal(board, width, height, marked, x, y);
      }
    }
  }
  return marked;
};

const remove = (board, width, height, marked) => {
  const offsets = Array(width).fill(0);
  const ret = Array(height).fill().map(() => Array(width).fill(0));
  for (let y = height - 1; y >= 0; --y) {
    for (let x = 0; x < width; ++x) {
      if (marked[y][x]) {
        offsets[x] = offsets[x] + 1;
      } else {
        ret[y + offsets[x]][x] = board[y][x];
      }
    }
  }
  return ret;
};

const merge = (width, height, markedBoard1, markedBoard2) => {
  const ret = Array(height).fill().map(() => Array(width).fill(false));
  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      ret[y][x] = markedBoard1[y][x] || markedBoard2[y][x];
    }
  }
  return ret;
};
/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
  const height = board.length;
  const width = board[0].length;
  let output = board.map(row => row.slice());
  while (true) {
    const marked = merge(
      width, height,
      findVertical(output, width, height),
      findHorizontal(output, width, height),
    );
    if (!marked.some(row => row.some(it => it))) {
      break;
    }
    output = remove(output, width, height, marked);
  }
  return output;
};

export default candyCrush;