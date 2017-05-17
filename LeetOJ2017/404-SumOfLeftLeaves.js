/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const isLeaf = (node) => node.left === null && node.right === null;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) { return 0; }
  let ret = 0;
  if (root.left && isLeaf(root.left)) {
    ret += root.left.val;
  }
  ret += sumOfLeftLeaves(root.left);
  ret += sumOfLeftLeaves(root.right);

  return ret;
};

export default sumOfLeftLeaves;
