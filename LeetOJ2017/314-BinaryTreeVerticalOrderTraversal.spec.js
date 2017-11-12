import { expect } from 'chai';
import { treeDeserializer } from '../lib/tree';
import verticalOrder from './314-BinaryTreeVerticalOrderTraversal';

describe('LeetOJ 314-BinaryTreeVericalOrderTraversal', () => {
  describe('verticalOrder', () => {
    it('should work with given example 1', () => {
      const input = treeDeserializer([3, 9, 20, null, null, 15, 7], null);
      const expected = [
        [9],
        [3, 15],
        [20],
        [7]
      ];
      expect(verticalOrder(input)).to.eql(expected);
    });
    it('should work with given example 2', () => {
      const input = treeDeserializer([3, 9, 8, 4, 0, 1, 7]);
      const expected = [
        [4],
        [9],
        [3, 0, 1],
        [8],
        [7]
      ];
      expect(verticalOrder(input)).to.eql(expected);
    });
    it('should work with given example 3', () => {
      const input = treeDeserializer([3, 9, 8, 4, 0, 1, 7, null, null, null, 2, 5], null);
      const expected = [
        [4],
        [9, 5],
        [3, 0, 1],
        [8, 2],
        [7]
      ];
      expect(verticalOrder(input)).to.eql(expected);
    });
  });
});
