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
var isBalanced = function(root) {

  const getInfo = (node) => {
    if (node === null) {
      return {
        height: 0,
        isBalanced: true,
      };
    }
    const left = getInfo(node.left);
    if (!left.isBalanced) {
      return { isBalanced: false };
    }
    const right = getInfo(node.right);
    if (!right.isBalanced) {
      return { isBalanced: false };
    }
    return {
      height: Math.max(left.height, right.height) + 1,
      isBalanced: Math.abs(left.height - right.height) <= 1,
    };
  };

  return getInfo(root).isBalanced;
};

export default isBalanced;