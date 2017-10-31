/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const findCount = (node, value) => {
  if (node === null) {
    return 0;
  }
  let ret = 0;
  if (node.val === value) {
    ret += 1;
  }
  return ret + findCount(node.left, value) + findCount(node.right, value);
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {

  const findModesAndTheirCounts = (node) => {
    if (node === null) {
      return {
        modes: [],
        count: 0,
      }
    }

    let modes = [node.val];
    let count = findCount(node.left, node.val) + findCount(node.right, node.val) + 1;
    const left = findModesAndTheirCounts(node.left);
    if (left.count > count) {
      modes = left.modes;
      count = left.count;
    } else if (left.count === count) {
      // note that node cannot be among left.modes
      modes = modes.concat(left.modes);
    }
    const right = findModesAndTheirCounts(node.right);
    if (right.count > count) {
      modes = right.modes;
      count = right.count;
    } else if (right.count === count) {
      // note that node cannot be among right.modes
      modes = modes.concat(right.modes);
    }
    return { modes, count }
  };

  return findModesAndTheirCounts(root).modes;
};

export default findMode;