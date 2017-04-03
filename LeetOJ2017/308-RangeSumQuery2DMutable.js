class Vertex {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  isIntersectWith (rect) {
    return (
      this.x >= rect.x && this.x < rect.x + rect.w &&
      this.y >= rect.y && this.y < rect.y + rect.h
    );
  }
}

class Rect {
  constructor (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  isOverlapWith (rect) {
    const isNot = (
      rect.x >= this.x + this.w ||
      rect.y >= this.y + this.h ||
      this.x >= rect.x + rect.w ||
      this.y >= rect.y + rect.h
    );
    return !isNot;
  }

  isCompletelyContains (rect) {
    return (
      this.x <= rect.x &&
      this.y <= rect.y &&
      this.x + this.w >= rect.x + rect.w &&
      this.y + this.h >= rect.y + rect.h
    );
  }
}

class QuadTreeNode {
  constructor (rect) {
    this.rect = rect;
    this.children = [];
    this.sum = 0;
  }
}

const buildQuadTree = (matrix) => {

  if (matrix.length === 0 || matrix[0].length === 0) {
    return null;
  }

  const {pow, ceil, log2, max} = Math;

  const matrixRect = new Rect(0, 0, matrix[0].length, matrix.length);
  const H = pow(2 , ceil(log2(matrixRect.h)));
  const W = pow(2 , ceil(log2(matrixRect.w)));
  const width = max(W, H);
  const rootSquare = new Rect(0, 0, width, width);

  const doBuildQuadTree = (square) => {

    if (!square.isOverlapWith(matrixRect)) {
      return null;
    }

    const node = new QuadTreeNode(square);
    if (square.w === 1) { // leaf
      node.sum = matrix[square.y][square.x];
      return node;
    }

    const childSqW = square.w / 2;
    for (let yi = 0; yi < 2; ++yi) {
      for (let xi = 0; xi < 2; ++xi) {
        const x = square.x + xi * childSqW;
        const y = square.y + yi * childSqW;
        const childNode = doBuildQuadTree(new Rect(x, y, childSqW, childSqW));
        if (childNode !== null) {
          node.children.push(childNode);
          node.sum += childNode.sum;
        }
      }
    }
    return node;
  };

  return doBuildQuadTree(rootSquare);
};



const sumAtNode = (node, queryRect) => {
  if (node === null) {
    return 0;
  }
  if (queryRect.isCompletelyContains(node.rect)) {
    return node.sum;
  }

  if (!node.rect.isOverlapWith(queryRect)) {
    return 0;
  }

  return node.children.reduce((sum, childNode) => (
    sum + sumAtNode(childNode, queryRect)
  ), 0);
};

const updateIntersectNodes = (node, vtx, diff) => {
  if (node === null || !vtx.isIntersectWith(node.rect)) {
    return;
  }
  node.sum += diff;
  for (let childNode of node.children) {
    updateIntersectNodes(childNode, vtx, diff);
  }
};

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.matrix = matrix;
  this.quadTreeRoot = buildQuadTree(matrix);
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
  const diff = val - this.matrix[row][col];
  const vtx = new Vertex(col, row);
  updateIntersectNodes(this.quadTreeRoot, vtx, diff);
  this.matrix[row][col] = val;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  const rect = new Rect(col1, row1, col2 - col1 + 1, row2 - row1 + 1);
  return sumAtNode(this.quadTreeRoot, rect);
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */

export default NumMatrix;