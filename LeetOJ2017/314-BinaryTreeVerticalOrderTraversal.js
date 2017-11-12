/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder0 = function(root) {
  const queue = [{x: 0, node: root}];
  const map = new Map();

  while (queue.length > 0) {
    const { x, node } = queue.shift();
    if (node === null) {
      continue;
    }
    if (!map.has(x)) {
      map.set(x, []);
    }
    map.get(x).push(node.val);
    queue.push({ x: x - 1, node: node.left});
    queue.push({ x: x + 1, node: node.right});
  }
  return Array.from(map.keys()).sort((a, b) => a - b).map(key => map.get(key));
};


//--------------------------------------------------------------------------------------------------

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder1 = function(root) {
  const q = [{node: root, x: 0}];
  const map = new Map();
  let minX = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  while (q.length > 0) {
    const {node, x} = q.shift();
    if (node) {
      if (!map.has(x)) {
        map.set(x, []);
      }
      map.get(x).push(node.val);
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      q.push({node: node.left, x: x - 1});
      q.push({node: node.right, x: x + 1});
    }
  }
  const ret = [];
  for (let x = minX; x <= maxX; ++x) {
    ret.push(map.get(x));
  }
  return ret;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
  if (root === null) { return []; }
  let leftOffset = 0;
  let rightOffset = 0;
  const findOffsets = (node, x) => {
    leftOffset = Math.min(leftOffset, x);
    rightOffset = Math.max(rightOffset, x);
    node.left && findOffsets(node.left, x - 1);
    node.right && findOffsets(node.right, x + 1);
  };
  findOffsets(root, 0);

  const buckets = Array(-leftOffset + 1 + rightOffset).fill().map(() => []);
  // BFS
  const queue = [{ node: root, x: -leftOffset }];
  while (queue.length > 0) {
    const {node, x} = queue.shift();
    if (node) {
      buckets[x].push(node.val);
      queue.push({node: node.left, x: x - 1});
      queue.push({node: node.right, x: x + 1});
    }
  }
  return buckets
};

export default verticalOrder;
