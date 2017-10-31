import { expect } from 'chai';
import findMode from './501-FindModeInBinarySearchTree';
import { treeDeserializer } from '../lib/tree';

describe('LeetOJ 501-FindModeInBinarySearchTree', () => {
  describe('findMode', () => {
    it('should solve the given example 1', () => {
      const root = treeDeserializer([1, '#', 2, 2]);
      expect(findMode(root)).to.eql([2]);
    });
    it('should solve the given example 2', () => {
      const root = treeDeserializer([1, '#', 2]);
      expect(findMode(root)).to.eql([1, 2]);
    });
  });
});
