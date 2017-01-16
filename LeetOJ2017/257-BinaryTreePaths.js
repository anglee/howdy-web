const binaryTreePathsI = (prefix, root, allRootToLeafPaths) => {
  if (!root) { return; }

  const path = [...prefix, root.val];
  if (root.left === null && root.right === null) {
    allRootToLeafPaths.push(path);
    return;
  }

  if (root.left) {
    binaryTreePathsI(path, root.left, allRootToLeafPaths);
  }

  if (root.right) {
    binaryTreePathsI(path, root.right, allRootToLeafPaths);
  }

};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const allRootToLeafPaths = [];
  binaryTreePathsI([], root, allRootToLeafPaths);
  return allRootToLeafPaths.map(path => path.join('->'));
};

export default binaryTreePaths;
