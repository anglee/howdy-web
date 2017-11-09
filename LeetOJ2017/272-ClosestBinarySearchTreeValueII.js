/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const traverseInOrder = (root) => {
  const ret = [];
  const traverse = (node) => {
    if (node === null) {
      return;
    }
    traverse(node.left);
    ret.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return ret;
};

const binarySearch = (A, target) => { // find least greater or equal to target
  let l = 0;
  let r = A.length;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (A[m] === target) {
      return m;
    } else if (A[m] > target) {
      r = m;
    } else { // A[m] < target
      l = m + 1;
    }
  }
  return l;
};
/**
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues0 = function(root, target, k) {

  const inOrder = traverseInOrder(root);
  const index = binarySearch(inOrder, target);

  let r = index;
  let l = index - 1;

  const ret = [];
  while (ret.length < k) {
    if (l < 0 || inOrder[r] - target < target - inOrder[l]) {
      ret.push(inOrder[r++]);
    } else {
      ret.unshift(inOrder[l--]);
    }
  }

  return ret;
};

/**
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
  let smallerHalf = [];
  let biggerHalf = [];

  const traverse = (node) => {
    if (node === null) { return; }
    if (node.val > target) {
      biggerHalf = [node.val, ...traverseInOrder(node.right), ...biggerHalf];
      traverse(node.left);
    } else {
      smallerHalf = [...smallerHalf, ...traverseInOrder(node.left), node.val];
      traverse(node.right);
    }
  };
  traverse(root);
  // console.log(smallerHalf);
  // console.log(biggerHalf);

  let s = smallerHalf.length - 1;
  let b = 0;
  const ret = [];
  while (ret.length < k) {
    if (b >= biggerHalf.length || (target - smallerHalf[s]) < (biggerHalf[b] - target)) {
      ret.unshift(smallerHalf[s--]);
    } else {
      ret.push(biggerHalf[b++]);
    }
  }
  return ret;
};

export default closestKValues;