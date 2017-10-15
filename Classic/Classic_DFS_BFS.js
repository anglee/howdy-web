export const DFS = (root) => {
  let ret = '';
  const stack = [root];
  while (stack.length > 0) {
    const n = stack.pop();
    ret += n.val;
    if (n.right) {
      stack.push(n.right);
    }
    if (n.left) {
      stack.push(n.left);
    }
  }
  return ret;
};

export const DFS_recursive = (root) => {
  let ret = '';
  const doDFS = (node) => {
    if (node === null) {
      return;
    }
    ret += node.val;
    doDFS(node.left);
    doDFS(node.right);
  };

  doDFS(root);
  return ret;
};

export const BFS = (root) => {
  let ret = '';
  const queue = [root];
  while (queue.length > 0) {
    const n = queue.shift();
    ret += n.val;
    if (n.left) {
      queue.push(n.left);
    }
    if (n.right) {
      queue.push(n.right);
    }
  }
  return ret;
};
