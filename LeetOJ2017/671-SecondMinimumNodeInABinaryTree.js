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
var findSecondMinimumValue = function(root) {

  let secondMinValue = Number.POSITIVE_INFINITY;
  const visit = (node) => {
    if (node.left){
      if (node.left.val === node.val) {
        visit(node.left);
      } else {
        secondMinValue = Math.min(secondMinValue, node.left.val);
      }
    }
    if (node.right) {
      if (node.right.val === node.val) {
        visit(node.right);
      } else {
        secondMinValue = Math.min(secondMinValue, node.right.val);
      }
    }
  };

  visit(root);

  if (secondMinValue === Number.POSITIVE_INFINITY) {
    secondMinValue = -1;
  }
  return secondMinValue;
};

export default findSecondMinimumValue;

