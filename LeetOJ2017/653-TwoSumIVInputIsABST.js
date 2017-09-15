/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const visited = new Set();
  const visit = (node) => {
    if (visited.has(k - node.val)) {
      return true;
    }
    visited.add(node.val);
    return  !!(
      node.left && visit(node.left) ||
      node.right && visit(node.right)
    );
  };
  return visit(root);
};

export default findTarget;