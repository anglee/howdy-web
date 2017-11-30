/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {

  const ret = [];
  const parents = [];
  let parentsSum = 0;
  const dfs = (node) => {
    parents.push(node.val);
    parentsSum += node.val;
    // console.log('visiting', node.val, parents, parentsSum);
    if (node.left === null && node.right === null) {
      if (parentsSum === sum) {
        ret.push([...parents]);
      }
    } else {
      if (node.left) {
        dfs(node.left, parents, parentsSum);
      }
      if (node.right) {
        dfs(node.right);
      }
    }
    parentsSum -= node.val;
    parents.pop();
  };

  if (root) {
    dfs(root);
  }

  return ret;
};

export default pathSum;
