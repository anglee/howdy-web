/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest0 = function(root, k) {
  let order = 0;
  let ret = null;
  let isDone = false;

  const traverse = (node) => {
    if (node === null) { return; }
    traverse(node.left);
    if (isDone) { return; }
    order++;
    if (order === k) {
      ret = node.val;
      isDone = true;
      return;
    }
    traverse(node.right);
    if (isDone) { return; }
  };

  traverse(root);
  return ret;
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

  // for frequent calls, don't need to calcTreeSize
  // and for constant updates, update the count when inserting a node into BST
  const calcTreeSizes = (root) => {
    if (root === null) {
      return 0;
    }
    root.treeSize = calcTreeSizes(root.left) + 1 + calcTreeSizes(root.right);
    return root.treeSize;
  };

  const doGetKthSmallest = (node, k) => {
    const leftTreeSize = node.left ? node.left.treeSize : 0;
    if (k <= leftTreeSize) {
      return doGetKthSmallest(node.left, k);
    } else if (k === leftTreeSize + 1) {
      return node.val;
    } else {
      return doGetKthSmallest(node.right, k - (leftTreeSize + 1));
    }
  };

  calcTreeSizes(root);
  return doGetKthSmallest(root, k);
};

export default kthSmallest;