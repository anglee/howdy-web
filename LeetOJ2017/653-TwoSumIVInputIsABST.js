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
 * @return {boolean}
 */
var findTarget0 = function(root, k) {
  const visited = new Set();
  const visit = (node) => {
    if (visited.has(k - node.val)) {
      return true;
    }
    visited.add(node.val);
    return  !!(
      node.left && visit(node.left) ||
      node.right && visit(node.right)
    );
  };
  return visit(root);
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const inorder = [];
  const inOrderTravse = node => {
    if (node === null) { return; }
    inOrderTravse(node.left);
    inorder.push(node.val);
    inOrderTravse(node.right);
  };
  inOrderTravse(root);
  let i = 0;
  let j = inorder.length - 1;
  while (i < j) {
    const sum = inorder[i] + inorder[j];
    if (sum === k) {
      return true;
    }
    if (sum < k) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};

export default findTarget;
