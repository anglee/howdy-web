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
var maxPathSum = function(root) {
  const traverse = (node) => {
    if (node === null ) {
      return {
        maxBranchSum: Number.NEGATIVE_INFINITY,
        maxSum: Number.NEGATIVE_INFINITY,
      };
    }

    const left = traverse(node.left);
    const right = traverse(node.right);
    const maxBranchSum = Math.max(
        0,
        right.maxBranchSum,
        left.maxBranchSum
      ) + node.val;
    const maxSum = Math.max(
      left.maxSum,
      right.maxSum,
      maxBranchSum,
      left.maxBranchSum + node.val + right.maxBranchSum
    );

    return {
      maxBranchSum,
      maxSum,
    };
  };
  return traverse(root).maxSum;
};

export default maxPathSum;