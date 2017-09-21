/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  const trimL = (node) => {
    if (node === null) { return null; }
    if (node.val >= L) {
      node.left = trimL(node.left);
      return node;
    } else { // node.val < L
      return trimL(node.right);
    }
  };
  const trimR = (node) => {
    if (node === null) { return null; }
    if (node.val <= R) {
      node.right = trimR(node.right);
      return node;
    } else { // node.val > R
      return trimR(node.left);
    }
  };

  return trimR(trimL(root));
};

export default trimBST;