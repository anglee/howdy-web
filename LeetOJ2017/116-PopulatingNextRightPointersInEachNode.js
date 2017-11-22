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
var connect0 = function(root) { // space: O(n)
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

//--------------------------------------------------------------------------------------------------



/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect1 = function(root) { // space: O(1)
  const processNode = (node) => {
    node.left.next = node.right;
    node.right.next = node.next ? node.next.left : null;
  };

  const processRow = (start) => {
    let node = start;
    if (!node.left) {
      return; // return if this is the last row (i.e. all leaves), no need to process
    }
    while (node) {
      processNode(node);
      node = node.next;
    }
  };

  let rowStart = root;
  while (rowStart) {
    processRow(rowStart);
    rowStart = rowStart.left;
  }
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) { // space: O(1), code is shorter than connect1
  if (root === null) { return; }
  const processRow = (node) => {
    while (node) {
      node.left.next = node.right;
      node.right.next = node.next ? node.next.left : null;
      node = node.next;
    }
  };

  let rowStart = root;
  root.next = null;
  while (rowStart.left) {
    processRow(rowStart);
    rowStart = rowStart.left;
  }
};

export default connect;

export default connect;
