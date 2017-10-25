const isOverlapped = (sq1, sq2) => {
  const sq1Left = sq1[0];
  const sq1Right = sq1[0] + sq1[1];
  const sq2Left = sq2[0];
  const sq2Right = sq2[0] + sq2[1];
  return !(sq1Right <= sq2Left || sq1Left >= sq2Right);
};

/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares1 = function(positions) {
  const squares = positions;
  const squareHeights = squares.map(([left, sideLength]) => sideLength);
  let maxHeight = 0;
  const ret = [];
  for (let i = 0; i < squares.length; ++i) {
    for (let j = i - 1; j >= 0; j--) {
      if (isOverlapped(squares[i], squares[j])) {
        const sideLength = squares[i][1];
        squareHeights[i] = Math.max(squareHeights[i], squareHeights[j] + sideLength);
      }
    }
    maxHeight = Math.max(maxHeight, squareHeights[i]);
    ret.push(maxHeight);
  }
  return ret;
};

//--------------------------------------------------------------------------------------------------

class BinaryTreeNode {
  constructor (left, right) {
    this.left = left;
    this.right = right;
    const mid = (left + right) / 2;
    this.squares = [];
    this.isSplitted = false;

    this.split = () => {
      this.isSplitted = true;
      this.leftChild = new BinaryTreeNode(left, mid);
      this.rightChild = new BinaryTreeNode(left, mid);
      const stays = [];
      this.squares.forEach(sq => {
        if (sq.right < mid) {
          this.leftChild.add(sq);
        } else if (sq.left > mid) {
          this.rightChild.add(sq);
        } else {
          stays.push(sq);
        }
      });
      this.squares = stays;
    };

    this.mid = mid;
  }

  add(sq) {
    if (this.isSplitted) {
      if (sq.right < this.mid) {
        this.leftChild.add(sq);
      } else if (sq.left > this.mid) {
        this.rightChild.add(sq);
      }
    }
    this.squares.push(sq);
    if (!this.isSplitted && this.squares.length > BinaryTreeNode.prototype.CAPACITY) {
      this.split();
    }
  }

  getOverlappingSquares(left, right) {
    if (right <= this.left || left >= this.right) {
      return [];
    }
    return [
      ...this.squares,
      ...(this.leftChild ? this.leftChild.getOverlappingSquares(left, right) : []),
      ...(this.rightChild ? this.rightChild.getOverlappingSquares(left, right) : []),
    ];
  }
}

BinaryTreeNode.prototype.CAPACITY = 100;

/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function(positions) {
  const squares = positions;
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < squares.length; ++i) {
    const sq = squares[i];
    const left = sq[0];
    const sizeLength = sq[1];
    const right = left + sizeLength;
    min = Math.min(min, left);
    max = Math.max(max, right);
  }
  const root = new BinaryTreeNode(min, max);
  const ret = [];
  let maxHeight = 0;
  const squareHeights = squares.map(([left, sideLength]) => sideLength);
  for (let i = 0; i < squares.length; ++i) {
    const sq = squares[i];
    const left = sq[0];
    const sizeLength = sq[1];
    const right = left + sizeLength;
    const overlappedSquares = root.getOverlappingSquares(left, right);
    for (let j = 0; j < overlappedSquares.length; ++j) {
      if (isOverlapped(sq, overlappedSquares[j])) {
        squareHeights[i] = Math.max(squareHeights[i], squareHeights[j] + sizeLength);
      }
    }
    maxHeight = Math.max(maxHeight, squareHeights[i]);
    ret.push(maxHeight);
    root.add(sq);
  }
  return ret;
};

export default fallingSquares;
