import _ from 'lodash';
import {expect} from 'chai';
import upsideDownBinaryTree from './howdy';

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const treeSerializer = (root) => {
  const q = [root];
  const ret = [];
  while (!_.isEmpty(q)) {
    const node = q.shift();
    if (node !== null) {
      ret.push(node.val);
      q.push(node.left);
      q.push(node.right);
    } else {
      ret.push('#')
    }
  }
  // trim trailing '#'s
  let indexOfLastValid = null;
  for (var i = ret.length - 1; i >= 0; i--) {
    if (ret[i] !== '#') {
      indexOfLastValid = i;
      break;
    }
  }
  return ret.slice(0, i + 1);
};

const treeDeserializer = (A) => {
  if (_.isEmpty(A) || A[0] === '#') {
    return null;
  }
  const getNext = (function () {
    var i = 1;
    return () => {
      if (i >= A.length) {
        return '#';
      }
      return A[i++];
    };
  })();

  const root = new TreeNode(A[0]);
  const q = [root];
  while (!_.isEmpty(q)) {
    const node = q.shift();

    let next = getNext();
    if (next !== '#') {
      node.left = new TreeNode(next);
      q.push(node.left);
    }
    next = getNext();
    if (next !== '#') {
      node.right = new TreeNode(next);
      q.push(node.right);
    }
  }
  return root;
};


describe('upsideDownBinaryTree', () => {
  it('solve example case', () => {
    const tree = treeDeserializer([1,2,3,4,5]);
    const ret = upsideDownBinaryTree(tree);

    expect(treeSerializer(ret)).to.deep.equal([4, 5, 2,'#', '#', 3, 1]);
  });
});
