/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const levelStats = [];

  const stack = [{
    node: root,
    level: 0
  }];

  while (stack.length) {
    const {node, level} = stack.pop();
    if (node) {
      if (levelStats.length <= level) {
        levelStats.push({total: 0, count: 0});
      }
      levelStats[level].total = levelStats[level].total + node.val;
      levelStats[level].count = levelStats[level].count + 1;
      stack.push({
        node: node.left,
        level: level + 1
      });
      stack.push({
        node: node.right,
        level: level + 1
      });
    }
  }

  return levelStats.map(({total, count}) => total / count);
};

export default averageOfLevels;