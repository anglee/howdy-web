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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree0 = function(preorder, inorder) {
  const len = preorder.length;
  if (len === 0) { return null; }

  const ret = new TreeNode(preorder[0]);

  const inorderIndexMap = new Map();
  inorder.forEach((v, i) => {
    inorderIndexMap.set(v, i);
  });

  const onLeftOfRoot = (root, node) => {
    return inorderIndexMap.get(node.val) < inorderIndexMap.get(root.val);
  };

  const appendTo = (root, node) => {
    if (onLeftOfRoot(root, node)) {
      if (!root.left) {
        root.left = node;
      } else {
        appendTo(root.left, node);
      }
    } else { // on right of root
      if (!root.right) {
        root.right = node;
      } else {
        appendTo(root.right, node);
      }
    }
  };

  for (let i = 1; i < len; ++i) {
    appendTo(ret, new TreeNode(preorder[i]));
  }
  return ret;
};


/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree1 = function(preorder, inorder) {
  if (preorder.length === 0) { return null; }

  const node = new TreeNode(preorder[0]);
  const i = inorder.indexOf(preorder[0]);
  const leftInorder = inorder.slice(0, i);
  const rightInorder = inorder.slice(i + 1);

  if (leftInorder.length > 0) {
    node.left = buildTree(
      preorder.slice(1, 1 + leftInorder.length),
      leftInorder
    );
  }

  if (rightInorder.length > 0) {
    node.right = buildTree(
      preorder.slice(1 + leftInorder.length),
      rightInorder
    );
  }

  return node;
};

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const inorderIndexMap = new Map();
  inorder.forEach((v, i) => {
    inorderIndexMap.set(v, i);
  });

  const doBuildTree = (pi, pj, ii, ij) => {
    if (pi === pj) {
      return null;
    }
    const node = new TreeNode(preorder[pi]);
    const i = inorderIndexMap.get(preorder[pi]);

    node.left = doBuildTree(
      pi + 1, pi + 1 + (i - ii),
      ii, i
    );

    node.right = doBuildTree(
      pi + 1 + (i - ii), pj,
      i + 1, ij
    );

    return node;
  };

  return doBuildTree(0, preorder.length, 0, inorder.length);
};

export default buildTree;

