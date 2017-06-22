/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder0 = function(root) {
  const ret = [];

  let stack = [root];
  let isOddRow = false;
  while (stack.length) {
    const row = [];
    const nextStack = [];
    while (stack.length) {
      const node = stack.pop();
      if (!node) { continue; }
      row.push(node.val);
      if (!isOddRow) {
        nextStack.push(node.left, node.right);
      } else {
        nextStack.push(node.right, node.left);
      }
    }
    if (row.length) {
      ret.push(row);
    }
    stack = nextStack;
    isOddRow = !isOddRow;
  }
  return ret;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const queue = [{ node: root, rowNumber: 0}];
  const ret = [];
  let rowBuffer = [];
  let currentRowNumber = 0;
  while (queue.length > 0) {
    const {node, rowNumber} = queue.shift();
    if (node === null) { continue; }
    if (rowNumber === currentRowNumber) {
      if (currentRowNumber & 1) {
        rowBuffer.unshift(node.val);
      } else {
        rowBuffer.push(node.val);
      }

    } else {
      ret.push(rowBuffer);
      rowBuffer = [node.val];
      currentRowNumber = rowNumber;
    }

    queue.push(
      {node: node.left, rowNumber: currentRowNumber + 1},
      {node: node.right, rowNumber: currentRowNumber + 1}
    );
  }
  if (rowBuffer.length) {
    ret.push(rowBuffer);
  }

  return ret;
};

export default zigzagLevelOrder;