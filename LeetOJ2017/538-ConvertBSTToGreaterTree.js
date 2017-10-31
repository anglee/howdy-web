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
var convertBST = function(root) {
  let sum = 0;
  const change = (node) => {
    const val = node.val;
    node.val = node.val + sum;
    sum += val;
  };
  const visit = (node) => {
    if (node === null) {
      return;
    }
    visit(node.right);
    change(node);
    visit(node.left);
  };

  visit(root);
  return root;
};

export default convertBST;
