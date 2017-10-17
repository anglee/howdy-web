/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function(N, K, r, c) {

  let board = Array(N).fill().map(() => Array(N).fill(0));
  board[r][c] = 1.0;

  const get = (board, x, y) => {
    if (x < 0 || y < 0 || x >= N || y >= N) {
      return 0;
    }
    return board[y][x];
  };
  for (let k = 0; k < K; ++k) {
    const newBoard = Array(N).fill().map(() => Array(N).fill(0));
    for (let y = 0; y < N; ++y) {
      for (let x = 0; x < N; ++x) {
        newBoard[y][x] += get(board, x - 1, y - 2) / 8;
        newBoard[y][x] += get(board, x - 1, y + 2) / 8;
        newBoard[y][x] += get(board, x + 1, y - 2) / 8;
        newBoard[y][x] += get(board, x + 1, y + 2) / 8;
        newBoard[y][x] += get(board, x - 2, y - 1) / 8;
        newBoard[y][x] += get(board, x - 2, y + 1) / 8;
        newBoard[y][x] += get(board, x + 2, y - 1) / 8;
        newBoard[y][x] += get(board, x + 2, y + 1) / 8;
      }
    }
    board = newBoard;
  }
  let ret = 0;
  for (let y = 0; y < N; ++y) {
    for (let x = 0; x < N; ++x) {
      ret += board[y][x];
    }
  }
  return ret;
};

export default knightProbability;