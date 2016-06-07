import _ from 'lodash';

const upsideDownBinaryTree = (root) => {
  let prev = null;
  let node = root;
  let prevRight = null;
  while (node) {
    let left = node.left;
    let right = node.right;
    node.left = prevRight;
    node.right = prev;
    prev = node;
    prevRight = right;
    node = left;
  }
  return prev;
};

export default upsideDownBinaryTree;
