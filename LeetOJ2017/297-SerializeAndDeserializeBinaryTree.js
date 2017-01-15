/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const pojo_ify = (root) => {
  if (root == null) {
    return null;
  }
  return {
    v: root.val,
    l: pojo_ify(root.left),
    r: pojo_ify(root.right),
  };
};

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const treeify = (rootPOJO) => {
  if (rootPOJO == null) {
    return null;
  }
  return new TreeNode(
    rootPOJO.v,
    treeify(rootPOJO.l),
    treeify(rootPOJO.r)
  );
};

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
export var serialize0 = function(root) {
  return JSON.stringify(pojo_ify(root));
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
export var deserialize0 = function(data) {
  return treeify(JSON.parse(data));
};

const NULL = '#';

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
export var serialize = function(root) {
  const ret = [];
  let queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    ret.push(node ? node.val : NULL);
    if (node !== null) {
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  // trim tail
  while (ret[ret.length - 1] === NULL) {
    ret.pop();
  }
  return ret;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
export var deserialize = function(data) {
  if (data.length === 0) {
    return null;
  }

  let i = 0;
  const root = new TreeNode(data[i]);
  i++;

  const queue = [root];
  while (queue.length > 0 && i < data.length) {
    const node = queue.shift();
    if (node !== null) {
      if (i < data.length && data[i] !== NULL) {
        node.left = new TreeNode(data[i]);
        queue.push(node.left);
      }
      i++;

      if (i < data.length && data[i] !== NULL) {
        node.right = new TreeNode(data[i]);
        queue.push(node.right);
      }
      i++;
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

