import { expect } from 'chai';
import {
  treeSerializer as toArray,
} from '../lib/tree'
import buildTree from './105-ConstructBinaryTreeFromPreorderAndInorderTraversal';

describe('LeetOJ 105-ConstructBinaryTreeFromPreorderAndInorderTraversal', () => {
  describe('buildTree', () => {
    it('should solve test case 0', () => {
      const preorder = [1, 2, 3];
      const inorder = [2, 1, 3];
      const built = buildTree(preorder, inorder);
      expect(toArray(built)).to.eql([1, 2, 3]);
    });

    it('should solve test case 1', () => {
      const preorder = [1, 2, 3];
      const inorder = [3, 2, 1];
      const built = buildTree(preorder, inorder);
      expect(toArray(built)).to.eql([1, 2, '#', 3]);
    });


    it('should solve test case 2', () => {
      const preorder = [1, 2, 3, 4, 5];
      const inorder = [2, 3, 1, 5, 4];
      const built = buildTree(preorder, inorder);
      expect(toArray(built)).to.eql([1, 2, 4, '#', 3, 5]);
    });
  });
});
