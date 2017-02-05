import { expect } from 'chai';
import levelOrder from './102-BinaryTreeLevelOrderTraversal';
import { treeDeserializer } from '../lib/tree';

describe('LeeOJ 102-BinaryTreeLevelOrderTraversal', () => {

  describe('levelOrder', () => {
    it('should say "levelOrder, World!"', () => {
      const root = treeDeserializer([3, 9, 20, null, null, 15, 7], null);
      expect(levelOrder(root)).to.eql([
        [3],
        [9, 20],
        [15, 7],
      ]);
    });
  });
});
