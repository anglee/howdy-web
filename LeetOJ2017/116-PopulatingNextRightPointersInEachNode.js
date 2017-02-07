/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  const q = [{ node: root, level: 0 }];
  let last = null;
  let lastLevel = -1;
  while (q.length > 0) {
    const { node, level } = q.shift();
    if (last) {
      // console.log(`last = ${last.val}, current = ${node.val}, lastLevel = ${lastLevel}, level = ${level}`);
      if (lastLevel !== level) {
        last.next = null;
      } else {
        last.next = node;
      }
    }
    if (node) {
      q.push(
        { node: node.left, level: level + 1 },
        { node: node.right, level: level + 1 }
      );
      last = node;
      lastLevel = level;
    }
  }
};

export default connect;
