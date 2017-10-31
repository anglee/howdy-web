import { expect } from 'chai';
import findMode from './501-FindModeInBinarySearchTree';
import { treeDeserializer } from '../lib/tree';

describe('LeetOJ 501-FindModeInBinarySearchTree', () => {
  describe('findMode', () => {
    it('should solve the given example', () => {
      const root = treeDeserializer([1, '#', 2, 2]);
      const mode = 2;
      expect(findMode(root)).to.eql([2]);
    });
  });
});
