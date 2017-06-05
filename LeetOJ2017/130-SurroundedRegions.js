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

//--------------------------------------------------------------------------------------------------

const getRoot = (parents, x, y) => {
  while (true) {
    let parent = parents[y][x];
    if (parent === null) {
      return null;
    }
    if (parent.x == x && parent.y === y) {
      return {x, y};
    }
    x = parent.x;
    y = parent.y;
  }
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) { // union find
  const { w, h } = getWidthAndHeight(board);
  if (w === 0 || h === 0) { return; }

  const parents = Array(h).fill().map(() => Array(w).fill(null));
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      if (board[y][x] !== 'O') {
        continue;
      }
      parents[y][x] = {x, y};
      if (
        y >= 1 && board[y - 1][x] === 'O' &&
        x >= 1 && board[y][x - 1] === 'O'
      ) {
        const root1 = getRoot(parents, x, y - 1);
        const root2 = getRoot(parents, x - 1, y);
        parents[y][x] = root1;
        parents[root2.y][root2.x] = root1; // union
      } else if (y >= 1 && board[y - 1][x] === 'O') {
        parents[y][x] = getRoot(parents, x, y - 1);
      } else if (x >= 1 && board[y][x - 1] === 'O') {
        parents[y][x] = getRoot(parents, x - 1, y);
      }
    }
  }
  const memoize = (f) => {
    const retMap = new Map();
    return (x, y) => {
      const key = `${x}_${y}`;
      if (retMap.has(key)) {
        return retMap.get(key);
      }
      const ret = f(x, y);
      retMap.set(key, ret);
      return ret;
    }
  };

  const getRootKey = memoize((x, y) => {
    const root = getRoot(parents, x, y);
    return root ? `${root.x}_${root.y}` : null;
  });
  const borderParents = new Set();
  for (let x = 0; x < w; ++x) {
    borderParents.add(getRootKey(x, 0));
    borderParents.add(getRootKey(x, h - 1));
  }
  for (let y = 0; y < h; ++y) {
    borderParents.add(getRootKey(0, y));
    borderParents.add(getRootKey(w - 1, y));
  }
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      if (board[y][x] === 'O') {
        if (!borderParents.has(getRootKey(x, y))) {
          board[y][x] = 'X';
        }
      }
    }
  }
};

export default solve;