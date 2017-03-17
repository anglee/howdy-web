import { expect } from 'chai';
import {
  treeDeserializer as fromArray,
} from '../lib/tree'
import maxPathSum from './124-BinaryTreeMaximumPathSum';

describe('LeetOJ 124-BinaryTreeMaximumPathSum', () => {
  describe('maxPathSum', () => {
    it('should solve the given example', () => {
      const input = fromArray([1, 2, 3]);
      const expected = 6;
      expect(maxPathSum(input)).to.equal(expected);
    });
  });
});
