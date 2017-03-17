/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) { return null; }
  const left = root.left;
  const right = root.right;
  root.left = right;
  root.right = left;
  invertTree(left);
  invertTree(right);
  return root;
};

export default invertTree;