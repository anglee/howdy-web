
const isValid9Numbers = (nums) => {
  const validNumberChars = new Set([
    '1', '2', '3', '4', '5',
    '6', '7', '8', '9'
  ]);
  for (let num of nums) {
    if (num === '.') {
      continue;
    }
    if (!validNumberChars.has(num)) {
      return false;
    }
    validNumberChars.delete(num);
  }
  return true;
};

const getSquare = (board, x, y) => {
  const ret = [];
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      ret.push(board[y + j][x + i]);
    }
  }
  return ret;
};


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

  const rows = board;

  // validate rows
  for (let row of rows) {
    if (!isValid9Numbers(row)) {
      return false;
    }
  }

  // validate cols
  for (let i = 0; i < 9; ++i) {
    if (!isValid9Numbers(rows.map(row => row[i]))) {
      return false;
    }
  }

  // validate squares
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (!isValid9Numbers(getSquare(board, i * 3, j * 3))) {
        return false;
      }
    }
  }

  return true;
};

export default isValidSudoku;