/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const getTreeStats = (root) => {

  let min = root.val;
  let max = root.val;

  if (root.left) {
    const left = getTreeStats(root.left);
    if (!left.isValid || left.max >= root.val) {
      return {
        isValid: false
      };
    }
    min = Math.min(min, left.min);
  }

  if (root.right) {
    const right = getTreeStats(root.right);
    if (!right.isValid || right.min <= root.val) {
      return {
        isValid: false
      };
    }
    max = Math.max(max, right.max);
  }

  return {
    min, max, isValid: true
  }
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST0 = function(root) { // recursive
  if (root === null) {
    return true;
  }
  return getTreeStats(root).isValid;
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (root === null) {
    return true;
  }
  const poll = (node) => {
    const leftStats = node.left ? poll(node.left) : null;
    const rightStats = node.right ? poll(node.right) : null;
    const isValid = (
      (leftStats ? leftStats.isValid && leftStats.max < node.val : true) &&
      (rightStats ? rightStats.isValid && rightStats.min > node.val : true)
    );

    if (isValid) {
      return {
        isValid,
        min: leftStats ? leftStats.min : node.val,
        max: rightStats ? rightStats.max : node.val,
      };
    }
    return { isValid };
  };
  return poll(root).isValid;
};


export default isValidBST;