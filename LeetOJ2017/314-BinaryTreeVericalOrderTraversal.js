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
var verticalOrder = function(root) {
  const queue = [{x: 0, node: root}];
  const map = new Map();

  while (queue.length > 0) {
    const { x, node } = queue.shift();
    if (node === null) {
      continue;
    }
    if (!map.has(x)) {
      map.set(x, []);
    }
    map.get(x).push(node.val);
    queue.push({ x: x - 1, node: node.left});
    queue.push({ x: x + 1, node: node.right});
  }
  return Array.from(map.keys()).sort((a, b) => a - b).map(key => map.get(key));
};

export default verticalOrder;
