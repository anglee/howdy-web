/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const helper = (root) => {
  if (root === null) {
    return {
      diameter: 0,
      height: 0,
    };
  }

  const left = helper(root.left);
  const right = helper(root.right);

  return {
    diameter: Math.max(
      left.diameter,
      right.diameter,
      left.height + right.height
    ),
    height: Math.max(
      left.height,
      right.height
    ) + 1,
  };
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  return helper(root).diameter;
};

export default diameterOfBinaryTree;