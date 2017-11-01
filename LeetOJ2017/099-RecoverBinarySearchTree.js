/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const swap = (node1, node2) => {
  const temp = node1.val;
  node1.val = node2.val;
  node2.val = temp;
};

const findMinNode = (node) => {
  let minNode = node;
  if (node.right) {
    const rightMinNode = findMinNode(node.right);
    if (rightMinNode.val < minNode.val) {
      minNode = rightMinNode;
    }
  }
  if (node.left) {
    const leftMinNode = findMinNode(node.left);
    if (leftMinNode.val < minNode.val) {
      minNode = leftMinNode;
    }
  }
  return minNode;
};
const findMaxNode = (node) => {
  let maxNode = node;
  if (node.right) {
    const rightMaxNode = findMaxNode(node.right);
    if (rightMaxNode.val > maxNode.val) {
      maxNode = rightMaxNode;
    }
  }
  if (node.left) {
    const leftMaxNode = findMaxNode(node.left);
    if (leftMaxNode.val > maxNode.val) {
      maxNode = leftMaxNode;
    }
  }
  return maxNode;
};

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree0 = function(root) {
  let isSwapped = false;
  const rightMinNode = findMinNode(root.right);
  if (rightMinNode.val < root.val) {
    swap(root, rightMinNode);
    isSwapped = true;
  }
  const leftMaxNode = findMaxNode(root.left);
  if (leftMaxNode.val > root.val) {
    swap(root, leftMaxNode);
    isSwapped = true;
  }
  if (!isSwapped) {
    recoverTree(root.left);
    recoverTree(root.right);
  }
  return root;
};

//--------------------------------------------------------------------------------------------------


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  // traverse in-order from left to right to find left
  const findLeft = () => {
    let prev = null;
    let left = null;
    const visit = (node) => {
      if (left) { return; }
      if (prev && prev.val > node.val) {
        left = prev;
      }
      prev = node;
    };
    const traverseInOrder = (node) => {
      if (node === null || left) {
        return;
      }
      traverseInOrder(node.left);
      visit(node);
      traverseInOrder(node.right);
    };
    traverseInOrder(root);
    // console.log(`left`, left.val);

    return left;
  };


  // traverse in-order from right to left to find right
  const findRight = () => {
    let prev = null;
    let right = null;
    const visit = (node) => {
      if (right) { return; }
      if (prev !== null && prev.val < node.val) {
        right = prev;
      }
      prev = node;
    };
    const traverseInOrder = (node) => {
      if (node === null || right) {
        return;
      }
      traverseInOrder(node.right);
      visit(node);
      traverseInOrder(node.left);
    };
    traverseInOrder(root);
    // console.log(`right`, right.val);
    return right;
  };

  swap(findLeft(), findRight());
};


export default recoverTree;