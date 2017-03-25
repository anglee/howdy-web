import { expect } from 'chai';
import { treeDeserializer } from '../lib/tree';
import diameterOfBinaryTree from './543-DiameterOfBinaryTree';

describe('LeetOJ 543-DiameterOfBinaryTree', () => {
  describe('diameterOfBinaryTree', () => {
    it('should solve the given example', () => {
      const input = treeDeserializer([1, 2, 3, 4, 5]);
      const expected = 3;
      expect(diameterOfBinaryTree(input)).to.equal(expected);
    });
  });
});
