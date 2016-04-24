import _ from 'lodash';


export const BFS = (root) => {
  let ret = '';
  const stack = [root];
  while (!_.isEmpty(stack)) {
    const n = stack.pop();
    ret += n.val;
    if (n.rightChild) {
      stack.push(n.rightChild);
    }
    if (n.leftChild) {
      stack.push(n.leftChild);
    }
  }
  return ret;
};

export const DFS = (root) => {
  let ret = '';
  const queue = [root];
  while (!_.isEmpty(queue)) {
    const n = queue.shift();
    ret += n.val;
    if (n.leftChild) {
      queue.push(n.leftChild);
    }
    if (n.rightChild) {
      queue.push(n.rightChild);
    }
  }
  return ret;
};