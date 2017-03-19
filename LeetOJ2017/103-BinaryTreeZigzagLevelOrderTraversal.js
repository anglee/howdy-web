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
var zigzagLevelOrder = function(root) {
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

export default zigzagLevelOrder;