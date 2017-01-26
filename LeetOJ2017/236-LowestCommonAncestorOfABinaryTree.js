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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor0 = function(root, p, q) {
  let pathToP = null;
  let pathToQ = null;
  let done = false;

  const bfs = (path, node) => {
    if (done) { return; }
    if (node === p) { pathToP = path; }
    if (node === q) { pathToQ = path; }
    if (pathToP && pathToQ) { done = true; }

    if (node.left) {
      bfs([...path, node.left], node.left);
    }
    if (node.right) {
      bfs([...path, node.right], node.right);
    }
  };

  bfs([root], root);

  let ret = null;
  for (let i = 0; i < pathToP.length && i < pathToQ.length; ++i) {
    if (pathToP[i] === pathToQ[i]) {
      ret = pathToP[i];
    } else {
      break;
    }
  }
  return ret;
};

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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const parentMap = new Map();
  let done = false;

  const bfs = (parent, node) => {
    if (done) { return; }

    parentMap.set(node, parent);

    if (parentMap.get(p) && parentMap.get(q)) { done = true; }

    if (node.left) {
      bfs(node, node.left);
    }
    if (node.right) {
      bfs(node, node.right);
    }
  };

  bfs(null, root);

  // parentMap.forEach((v, k) => {
  //   console.log(`${k ? k.val : null} --> ${v ? v.val : null}`);
  // });


  const findPathFromRoot = (it) => {
    const ret = [];
    let node = it;
    while (node) {
      ret.push(node);
      const parent = parentMap.get(node);
      node = parent;
    }
    return ret.reverse();
  };

  let pathToP = findPathFromRoot(p);
  let pathToQ = findPathFromRoot(q);

  // console.log('pathToP', _.map(pathToP, 'val'));
  // console.log('pathToQ', _.map(pathToQ, 'val'));
  let ret = null;
  for (let i = 0; i < pathToP.length && i < pathToQ.length; ++i) {
    if (pathToP[i] === pathToQ[i]) {
      ret = pathToP[i];
    } else {
      break;
    }
  }
  return ret;
};

export default lowestCommonAncestor;

