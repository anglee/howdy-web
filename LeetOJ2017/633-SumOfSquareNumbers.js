const squares = Array(10).fill().map((it, i) => i * i);
let lastX = 9;
const set = new Set(squares);

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  while (c >= squares[squares.length - 1]) {
    lastX++;
    const newSq = lastX * lastX;
    squares.push(newSq);
    set.add(newSq);
  }
  for (let sq of squares) {
    if (set.has(c - sq)) {
      return true;
    }
  }

  return false;
};

export default judgeSquareSum;