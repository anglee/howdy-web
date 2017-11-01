import { expect } from 'chai';
import recoverTree from './099-RecoverBinarySearchTree';
import { treeDeserializer, treeSerializer } from '../lib/tree';

describe('LeetOJ 099-RecoverBinarySearchTree', () => {
  describe('recoverTree', () => {
    it('should solve test case', () => {
      const root = treeDeserializer([4, 2, 5, 1, '#', 3]);
      recoverTree(root);
      expect(treeSerializer(root)).to.eql([3, 2, 5, 1, '#', 4]);
    });
    it('should solve OJ test case 1', () => {
      const root = treeDeserializer([0, 1]);
      recoverTree(root);
      expect(treeSerializer(root)).to.eql([1, 0]);
    });
    it('should solve OJ test case 2', () => {
      const root = treeDeserializer([3, null, 2, null, 1], null);
      recoverTree(root);
      expect(treeSerializer(root, null)).to.eql([1, null, 2, null, 3]);
    });
  });
});
