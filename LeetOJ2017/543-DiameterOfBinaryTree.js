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
var diameterOfBinaryTree0 = function(root) {
  return helper(root).diameter;
};


//--------------------------------------------------------------------------------------------------


/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let diameter = 0;
  const postOrderH = (node) => {
    if (!node) { return 0; }
    const leftH = postOrderH(node.left);
    const rightH = postOrderH(node.right);
    diameter = Math.max(diameter, leftH + rightH);
    return Math.max(leftH, rightH) + 1;
  };
  postOrderH(root);
  return diameter;
};

export default diameterOfBinaryTree;