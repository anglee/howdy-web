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
var levelOrder = function(root) {

  const queue = [[root, 0]];
  const ret = [];
  while (queue.length > 0) {
    const [node, level] = queue.shift();
    if (node !== null) {
      if (!ret[level]) {
        ret[level] = [];
      }

      ret[level].push(node.val);

      queue.push(
        [node.left, level + 1],
        [node.right, level + 1]
      );
    }
  }
  return ret;
};

export default levelOrder;