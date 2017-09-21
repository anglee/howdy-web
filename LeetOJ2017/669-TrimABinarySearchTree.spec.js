import { expect } from 'chai';
import trimBST from './669-TrimABinarySearchTree';
import { treeDeserializer as toTree } from '../lib/tree';
import { treeSerializer as fromTree } from '../lib/tree';

describe('LeetOJ 669-TrimABinarySearchTree', () => {
  describe('trimBST', () => {
    it('should solve the given example 1', () => {
      const root = toTree([1, 0, 2]);
      const L = 1;
      const R = 2;
      const expected = [1, '#', 2];
      expect(fromTree(trimBST(root, L, R))).to.eql(expected);
    });
    it('should solve the given example 2', () => {
      const root = toTree([3, 0, 4, '#', 2, '#', '#', 1]);
      const L = 1;
      const R = 3;
      const expected = [3, 2, '#', 1];
      expect(fromTree(trimBST(root, L, R))).to.eql(expected);
    });
  });
});
