import _ from 'lodash';

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {

  let lastNode = null;

  const visit = (node) => {
    if (lastNode === p) {
      return node;
    }
    lastNode = node;
  };

  const traverse = (node) => {
    let ans = null;
    if (node.left) {
      ans = traverse(node.left);
      if (ans) { return ans; }
    }
    const isSuccessorOfP = visit(node);
    if (isSuccessorOfP) {
      return node;
    }
    if (node.right) {
      ans = traverse(node.right);
      if (ans) { return ans; }
    }

    return null;
  };

  return traverse(root);

};
export default inorderSuccessor;
