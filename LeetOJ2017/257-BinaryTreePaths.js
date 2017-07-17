const binaryTreePathsI = (prefix, root, allRootToLeafPaths) => {
  if (!root) { return; }

  const path = [...prefix, root.val];
  if (root.left === null && root.right === null) {
    allRootToLeafPaths.push(path);
    return;
  }

  if (root.left) {
    binaryTreePathsI(path, root.left, allRootToLeafPaths);
  }

  if (root.right) {
    binaryTreePathsI(path, root.right, allRootToLeafPaths);
  }

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
 * @return {string[]}
 */
var binaryTreePaths0 = function(root) {
  const allRootToLeafPaths = [];
  binaryTreePathsI([], root, allRootToLeafPaths);
  return allRootToLeafPaths.map(path => path.join('->'));
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
 * @return {string[]}
 */
var binaryTreePaths1 = function(root) {

  const buildParentMap = (root) => {
    const parentMap = new Map();
    const doBuildParentMap = (node, parent) => {
      if (node === null) { return; }
      parentMap.set(node, parent);
      doBuildParentMap(node.left, node);
      doBuildParentMap(node.right, node);
    };
    doBuildParentMap(root, null);
    return parentMap;
  };

  const visitLeafs = (rootNode, parentMap) => {
    const paths = [];
    const isLeaf = node => node.left === null && node.right === null;
    const getParent = node => parentMap.get(node);
    const getPathToRoot = (node) => {
      const path = [];
      while (node) {
        path.push(node);
        node = getParent(node);
      }
      return path;
    };

    const doVisitLeafs = (node) => {
      if (node === null) { return; }
      if (isLeaf(node)) {
        paths.push(getPathToRoot(node).reverse());
      } else {
        doVisitLeafs(node.left);
        doVisitLeafs(node.right);
      }
    };

    doVisitLeafs(rootNode);
    return paths.map(path => path.map(node => node.val).join('->'));
  };

  return visitLeafs(root, buildParentMap(root));
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const paths = [];
  const path = [];
  const helper = (node) => {
    if (node === null) { return; }

    path.push(node.val);
    if (node.left === null && node.right === null) {
      paths.push(path.join('->'));
    }
    helper(node.left);
    helper(node.right);
    path.pop(node);
  };

  helper(root);

  return paths;
};

export default binaryTreePaths;
