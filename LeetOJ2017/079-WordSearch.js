/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist0 = function(board, word) {
  const height = board.length;
  const width = height > 0 ? board[0].length : 0;

  const search = (b, x, y, w) => {
    if (
      x < 0 || x >= width ||
      y < 0 || y >= height ||
      b[y][x] === null
    ) {
      return false;
    }

    const ch = b[y][x];
    if (ch !== w[0]) {
      return false;
    }

    // ch === w[0]

    if (w.length === 1) {
      return true;
    }

    b[y][x] = null;
    if (
      search(b, x - 1, y, w.substr(1)) ||
      search(b, x + 1, y, w.substr(1)) ||
      search(b, x, y - 1, w.substr(1)) ||
      search(b, x, y + 1, w.substr(1))
    ) {
      return true;
    }
    b[y][x] = ch;
  };

  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      if (search(board, x, y, word)) {
        return true;
      }
    }
  }
  return false;
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const h = board.length;
  if (h === 0) { return false; }
  const w = board[0].length;
  if (w === 0) { return false; }
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      const isUsed = Array(h).fill().map(() => Array(w).fill(false));
      const search = (x, y, i) => {
        if (x < 0 || x >= w || y < 0 || y >= h || isUsed[y][x]) {
          return false;
        }
        if (board[y][x] !== word[i]) {
          return false;
        }
        if (i === word.length - 1) {
          return true;
        }
        isUsed[y][x] = true;
        return (
          search(x - 1, y, i + 1) ||
          search(x + 1, y, i + 1) ||
          search(x, y - 1, i + 1) ||
          search(x, y + 1, i + 1)
        );
      };
      const found = search(x, y, 0);
      if (found) {
        return true;
      }
    }
  }
  return false;
};

export default exist;