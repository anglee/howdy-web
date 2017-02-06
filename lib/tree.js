import _ from 'lodash';

export function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

export const treeSerializer = (root, NULL = '#') => {
  const q = [root];
  const ret = [];
  while (!_.isEmpty(q)) {
    const node = q.shift();
    if (node !== null) {
      ret.push(node.val);
      q.push(node.left);
      q.push(node.right);
    } else {
      ret.push(NULL)
    }
  }
  // trim trailing NULL's
  let indexOfLastValid = null;
  for (var i = ret.length - 1; i >= 0; i--) {
    if (ret[i] !== NULL) {
      indexOfLastValid = i;
      break;
    }
  }
  return ret.slice(0, i + 1);
};

export const treeDeserializer = (A, NULL = '#') => {
  if (_.isEmpty(A) || A[0] === NULL) {
    return null;
  }
  const getNext = (function () {
    var i = 1;
    return () => {
      if (i >= A.length) {
        return NULL;
      }
      return A[i++];
    };
  })();

  const root = new TreeNode(A[0]);
  const q = [root];
  while (!_.isEmpty(q)) {
    const node = q.shift();

    let next = getNext();
    if (next !== NULL) {
      node.left = new TreeNode(next);
      q.push(node.left);
    }
    next = getNext();
    if (next !== NULL) {
      node.right = new TreeNode(next);
      q.push(node.right);
    }
  }
  return root;
};

export const findNodeOfValue = (root, value) => {
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (node) {
      if (node.val === value) {
        return node;
      }
      stack.push(node.left, node.right);
    }
  }
  return null;
};

