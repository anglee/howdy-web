/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.n = n;
  this.players = new Map();
  this.players.set(1, {
    row: Array(n).fill(0),
    col: Array(n).fill(0),
    diag: Array(2).fill(0),
  });
  this.players.set(2, {
    row: Array(n).fill(0),
    col: Array(n).fill(0),
    diag: Array(2).fill(0),
  });
};

/**
 * Player {player} makes a move at ({row}, {col}).
 @param row The row of the board.
 @param col The column of the board.
 @param player The player, can be either 1 or 2.
 @return The current winning condition, can be either:
 0: No one wins.
 1: Player 1 wins.
 2: Player 2 wins.
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  const { n } = this;
  const data = this.players.get(player);
  data.row[row]++;
  if (data.row[row] === n) { return player; }
  data.col[col]++;
  if (data.col[col] === n) { return player; }
  if (row === col) {
    data.diag[0]++;
    if (data.diag[0] === n) { return player; }
  }
  if (row + col === n - 1) {
    data.diag[1]++;
    if (data.diag[1] === n) { return player; }
  }
  return 0;
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = Object.create(TicTacToe).createNew(n)
 * var param_1 = obj.move(row,col,player)
 */

export default TicTacToe;