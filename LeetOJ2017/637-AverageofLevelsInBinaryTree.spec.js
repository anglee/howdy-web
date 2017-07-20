import { expect } from 'chai';
import averageOfLevels from './637-AverageofLevelsInBinaryTree';
import { treeDeserializer } from '../lib/tree';

describe('LeetOJ 637-AverageofLevelsInBinaryTree', () => {
  describe('averageOfLevels', () => {
    it('should solve the given example', () => {
      const root = treeDeserializer([3, 9, 20, '#', '#', 15, 7]);
      const expected = [3, 14.5, 11];
      expect(averageOfLevels(root)).to.eql(expected);
    });
  });
});
