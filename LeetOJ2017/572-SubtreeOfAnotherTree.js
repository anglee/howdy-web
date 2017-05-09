/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const isIdentical = (s, t) => {
  if (s === null && t === null) {
    return true;
  }
  if (s === null || t === null) {
    return false;
  }

  if (s.val !== t.val) {
    return false;
  }

  return isIdentical(s.left, t.left) && isIdentical(s.right, t.right);
};

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  return !!(
    isIdentical(s, t) ||
    (s.left && isSubtree(s.left, t)) ||
    (s.right && isSubtree(s.right, t))
  );
};

export default isSubtree;