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
var connect0 = function(root) {
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

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  const findNext = (node) => {
    while (node && !node.left && !node.right) {
      node = node.next;
    }
    if (!node) {
      return null;
    }
    return node.left ? node.left : node.right;
  };

  const processNode = (node) => {
    if (node.left) {
      if (node.right) {
        node.left.next = node.right;
      } else {
        node.left.next = findNext(node.next);
      }
    }
    if (node.right) {
      node.right.next = findNext(node.next);
    }
  };

  const processRow = (start) => {
    let node = start;
    while (node) {
      processNode(node);
      node = node.next;
    }
  };

  let rowStart = root;
  while (rowStart) {
    processRow(rowStart);
    rowStart = findNext(rowStart);
  }
};

export default connect;