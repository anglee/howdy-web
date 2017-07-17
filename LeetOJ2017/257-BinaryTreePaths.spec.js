import { expect } from 'chai';
import { treeDeserializer } from '../lib/tree';
import binaryTreePaths from './257-BinaryTreePaths';

describe('LeetOJ 257-BinaryTreePaths.js', () => {

  describe('binaryTreePaths', () => {
    it('should work with given example', () => {
      const root = treeDeserializer([1, 2, 3, '#', 5]);
      expect(binaryTreePaths(root)).to.have.all.members([
        '1->3',
        '1->2->5',
      ]);
    });
    it('should work with empty input', () => {
      const root = treeDeserializer([]);
      expect(binaryTreePaths(root)).to.eql([]);
    });
  });
});