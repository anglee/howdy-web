import _ from 'lodash';

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor0 = function(root, p) {

  let lastNode = null;

  const visit = (node) => {
    if (lastNode === p) {
      return node;
    }
    lastNode = node;
  };

  const traverse = (node) => {
    let ans = null;
    if (node.left) {
      ans = traverse(node.left);
      if (ans) { return ans; }
    }
    const isSuccessorOfP = visit(node);
    if (isSuccessorOfP) {
      return node;
    }
    if (node.right) {
      ans = traverse(node.right);
      if (ans) { return ans; }
    }

    return null;
  };

  return traverse(root);

};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  const findLeftMostLeaf = (node) => {
    let current = node;
    while (current && current.left) {
      current = current.left;
    }
    return current;
  };

  const memoize = (f) => {
    const map = new Map();
    return (node) => {
      if (map.has(node)) {
        return map.get(node);
      }
      const ret = f(node);
      map.set(node, ret);
      return ret;
    }
  };

  const findParent = memoize((node) => {
    const q = [root];
    while (q.length > 0) {
      const current = q.shift();
      if (current === null) {
        continue;
      }
      if (current.left === node || current.right === node) {
        return current;
      }
      q.push(current.left, current.right);
    }
    return null;
  });

  if (p.right !== null) {
    return findLeftMostLeaf(p.right);
  } else {
    let node = p;
    while (node) {
      let parent = findParent(node);
      if (parent === null) {
        return null;
      }
      if (node === parent.left) {
        return parent;
      } else {
        node = parent;
      }
    }
    return null;
  }
};

export default inorderSuccessor;
