import _ from 'lodash';
import {
  TreeNode,
  treeSerializer,
  treeDeserializer
} from './lib/tree';


const inOrderTraversal1 = (root) => {
  const ret = [];
  const doTraverse = (r) => {
    if (r === null) { return; }
    doTraverse(r.left);
    ret.push(r.val);
    doTraverse(r.right);
  };
  doTraverse(root);
  return ret;
};

const inOrderTraversal2 = (root) => {
  const stack = [];
  let current = root;
  const ret = [];
  while (current || !_.isEmpty(stack)) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    ret.push(current.val);
    current = current.right;
  }
  return ret;
};

const inOrderTraversal3 = (root) => {
  const ret = [];
  const stack = [{node: root, action: 'visitAll'}];
  while (stack.length > 0) {
    const {node, action} = stack.pop();
    if (action === 'visitAll') {
      if (node.right) {
        stack.push({node: node.right, action: 'visitAll'});
      }
      stack.push({node: node, action: 'output'});
      if (node.left) {
        stack.push({node: node.left, action: 'visitAll'});
      }
    } else { // action === 'output'
      ret.push(node.val);
    }
  }
  return ret;
};

const preOrderTraversal1 = (root) => {
  const ret = [];
  const doTraverse = (r) => {
    if (r === null) { return; }
    ret.push(r.val);
    doTraverse(r.left);
    doTraverse(r.right);
  };
  doTraverse(root);
  return ret;
};

const preOrderTraversal2 = (root) => {
  const stack = [];
  let current = root;
  const ret = [];
  while (current || !_.isEmpty(stack)) {
    while (current) {
      stack.push(current);
      ret.push(current.val);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }
  return ret;
};

const preOrderTraversal3 = (root) => { // JUST A SIMPLE DFS!
  const ret = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    ret.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return ret;
};

const postOrderTraversal1 = (root) => {
  const ret = [];
  const doTraverse = (r) => {
    if (r === null) { return; }
    doTraverse(r.left);
    doTraverse(r.right);
    ret.push(r.val);
  };
  doTraverse(root);
  return ret;
};

const postOrderTraversal2 = (root) => {
  const ret = [];
  const stack = [root];

  let last = null;
  while (stack.length > 0) {
    const node = stack.pop();
    // when do we know we can output the popped node?
    // Answer: when all it's children are visited, that is
    // 1. it has a right child, and it is the last node we output
    // 2. it doesn't have have a right child, but a left child,
    //    and that left child is the last node we output
    // 3. it has no children
    if ((node.right !== null && node.right === last)
      || (node.right == null && node.left !== null && node.left === last)
      || (node.left == null && node.right == null)) {

      ret.push(node.val); // output
      last = node;
    } else {
      stack.push(node);
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
  }
  return ret;
};

const postOrderTraversal3 = (root) => {
  const ret = [];
  const stack = [{node: root, action: 'visitAll'}];
  while (stack.length > 0) {
    const {node, action} = stack.pop();
    if (action === 'visitAll') {
      stack.push({node: node, action: 'output'});
      if (node.right) {
        stack.push({node: node.right, action: 'visitAll'});
      }
      if (node.left) {
        stack.push({node: node.left, action: 'visitAll'});
      }
    } else { // action === 'output'
      ret.push(node.val);
    }
  }
  return ret;
};

export {
  TreeNode,
  treeSerializer,
  treeDeserializer,
  inOrderTraversal1,
  inOrderTraversal2,
  inOrderTraversal3,
  preOrderTraversal1,
  preOrderTraversal2,
  preOrderTraversal3,
  postOrderTraversal1,
  postOrderTraversal2,
  postOrderTraversal3,
};
