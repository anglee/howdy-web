/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
import { TreeNode } from '../lib/tree';

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree0 = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  let max = Number.NEGATIVE_INFINITY;
  let maxI = null;
  nums.forEach((num, i) => {
    if (num > max) {
      max = num;
      maxI = i;
    }
  });

  const node = new TreeNode(max);
  node.left = constructMaximumBinaryTree(nums.slice(0, maxI));
  node.right = constructMaximumBinaryTree(nums.slice(maxI + 1));
  return node;
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  const constructMaximumBinaryTreeI = (left, right) => {
    if (left > right) {
      return null;
    }
    let max = Number.NEGATIVE_INFINITY;
    let maxI = null;
    for (let i = left; i <= right; ++i) {
      if (nums[i] > max) {
        max = nums[i];
        maxI = i;
      }
    }

    const node = new TreeNode(max);
    node.left = constructMaximumBinaryTreeI(left, maxI - 1);
    node.right = constructMaximumBinaryTreeI(maxI + 1, right);
    return node;
  };
  return constructMaximumBinaryTreeI(0, nums.length - 1);
};

export default constructMaximumBinaryTree;
