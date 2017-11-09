import { expect } from 'chai';
import closestKValues from './272-ClosestBinarySearchTreeValueII';
import { treeDeserializer } from '../lib/tree';

describe('LeetOJ 272-ClosestBinarySearchTreeValueII', () => {
  describe('closestKValues', () => {
    it('should solve test case', () => {
      const root = treeDeserializer([2, 1, 100]);
      expect(closestKValues(root, 10, 1)).to.eql([2]);
      expect(closestKValues(root, 0.1, 1)).to.eql([1]);
      expect(closestKValues(root, 99, 1)).to.eql([100]);
      expect(closestKValues(root, 1000, 1)).to.eql([100]);
    });
    it('should solve test case 2', () => {
      const root = treeDeserializer([2, 1, 100]);
      expect(closestKValues(root, 10, 2)).to.eql([1, 2]);
      expect(closestKValues(root, 0.1, 2)).to.eql([1, 2]);
      expect(closestKValues(root, 99, 2)).to.eql([2, 100]);
      expect(closestKValues(root, 1000, 2)).to.eql([2, 100]);
    });
    it('should solve OJ test case 1', () => {
      const root = treeDeserializer([4, 2, 5, 1, 3]);
      expect(closestKValues(root, 4.857143, 3)).to.have.all.members([5, 4, 3]);
    });
  });
});
