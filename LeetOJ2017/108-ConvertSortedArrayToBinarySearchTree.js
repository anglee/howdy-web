/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  const midIndex = Math.floor(nums.length / 2);
  const node = new TreeNode(nums[midIndex]);
  node.left = sortedArrayToBST(nums.slice(0, midIndex));
  node.right = sortedArrayToBST(nums.slice(midIndex + 1));
  return node;
};

export default sortedArrayToBST;