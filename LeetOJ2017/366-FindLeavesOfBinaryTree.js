/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function(root) {

  const heightGroups = [];

  const getHeight = (node) => {
    if (node === null) {
      return -1;
    }

    const height = Math.max(
      getHeight(node.left),
      getHeight(node.right)
    ) + 1;

    if (!heightGroups[height]) {
      heightGroups[height] = [];
    }
    heightGroups[height].push(node.val);
    return height;
  };

  getHeight(root);
  return heightGroups;
};

export default findLeaves;