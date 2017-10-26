import { expect } from 'chai';
import constructMaximumBinaryTree from './654-MaximumBinaryTree';
import { treeSerializer } from '../lib/tree';

describe('LeetOJ 654-MaximumBinaryTree', () => {
  describe('constructMaximumBinaryTree', () => {
    it('should solve the given example', () => {
      const input = [3, 2, 1, 6, 0, 5];
      const result = constructMaximumBinaryTree(input);
      expect(treeSerializer(result)).to.eql([6, 3, 5, '#', 2, 0, '#', '#', 1]);
    });
  });
});
