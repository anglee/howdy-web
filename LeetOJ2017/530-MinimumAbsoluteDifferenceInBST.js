/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let last = null;
  let minDiff = Number.POSITIVE_INFINITY;
  const inorder = (node) => {
    if (node === null) {
      return;
    }
    inorder(node.left);
    if (last !== null) {
      minDiff = Math.min(minDiff, node.val - last);
    }
    last = node.val;
    inorder(node.right);
  };

  inorder(root);
  return minDiff;
};

export default getMinimumDifference;
