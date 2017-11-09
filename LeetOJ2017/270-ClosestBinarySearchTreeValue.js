/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {

  let node = root;
  let lower = Number.NEGATIVE_INFINITY;
  let upper = Number.POSITIVE_INFINITY;
  while (node) {
    if (target > node.val) {
      lower = node.val;
      node = node.right;
    } else {
      upper = node.val;
      node = node.left;
    }
  }
  return target - lower < upper - target ? lower : upper;
};

export default closestValue;
