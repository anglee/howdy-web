import { expect } from 'chai';
import { treeDeserializer as toTree } from '../lib/tree';
import solution from './366-FindLeavesOfBinaryTree';

describe('LeetOJ 366-FindLeavesOfBinaryTree', () => {
  describe('solution', () => {
    it('should solve the given example', () => {
      const input = toTree([1, 2, 3, 4, 5]);
      const expected = [[4, 5, 3], [2], [1]];
      expect(solution(input)).to.eql(expected);
    });
  });
});
