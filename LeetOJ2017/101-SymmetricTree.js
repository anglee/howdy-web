/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

  if (root == null) { return true; }

  const s1 = [root.left];
  const s2 = [root.right];

  while (s1.length > 0 && s2.length > 0) {
    const node1 = s1.pop();
    const node2 = s2.pop();
    if (node1 === null && node2 === null) {
      continue;
    }
    if (node1 === null || node2 === null || node1.val !== node2.val) {
      return false;
    }
    s1.push(node1.right, node1.left);
    s2.push(node2.left, node2.right);
  }

  return s1.length === s2.length;
};

export default isSymmetric;