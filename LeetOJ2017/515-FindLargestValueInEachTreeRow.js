/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (root === null) { return []; }
  const queue = [
    {
      node: root,
      depth: 0,
    }
  ];

  const ret = [];
  let largest = Number.NEGATIVE_INFINITY;
  let lastDepth = 0;
  while (queue.length > 0) {
    const {node, depth} = queue.shift();
    if (node === null) {
      continue;
    }
    if (lastDepth !== depth) {
      ret.push(largest);
      largest = Number.NEGATIVE_INFINITY;
      lastDepth = depth;
    }
    largest = Math.max(largest, node.val);
    queue.push({
      node: node.left,
      depth: depth + 1
    });
    queue.push({
      node: node.right,
      depth: depth + 1
    });
  }
  ret.push(largest);
  return ret;
};

export default largestValues;