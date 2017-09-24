/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
  const findHeight = (node) => {
    if (node.isInteger()) {
      return 1;
    }
    return Math.max(...node.getList().map(findHeight)) + 1;
  };
  const height = Math.max(...nestedList.map(findHeight)) + 1;
  const getDepthSum = (list, depth) => {
    let ret = 0;
    for (let it of list) {
      if (it.isInteger()) {
        ret += it.getInteger() * (height - depth);
      } else {
        ret += getDepthSum(it.getList(), depth + 1);
      }
    }
    return ret;
  };

  return getDepthSum(nestedList, 1);
};

export default depthSumInverse;