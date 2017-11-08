import { expect } from 'chai';
import isSameTree from './100-SameTree';
import { treeDeserializer } from '../lib/tree';

describe('LeetOJ 100-SameTree', () => {
  describe('isSameTree', () => {
    it('should solve the given example 1', () => {
      const tree1 = treeDeserializer([1, 2, 3]);
      const tree2 = treeDeserializer([1, 2, 3]);
      expect(isSameTree(tree1, tree2)).to.be.true
    });
    it('should solve the given example 2', () => {
      const tree1 = treeDeserializer([1, 2]);
      const tree2 = treeDeserializer([1, '#', 2]);
      expect(isSameTree(tree1, tree2)).to.be.false
    });
    it('should solve the given example 3', () => {
      const tree1 = treeDeserializer([1, 2, 1]);
      const tree2 = treeDeserializer([1, 1, 2]);
      expect(isSameTree(tree1, tree2)).to.be.false
    });
  });
});
