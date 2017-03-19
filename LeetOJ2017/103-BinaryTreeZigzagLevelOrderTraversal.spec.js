import { expect } from 'chai';
import { treeDeserializer } from '../lib/tree';
import zigzagLevelOrder from './103-BinaryTreeZigzagLevelOrderTraversal';

const fromArray = (A) => {
  return treeDeserializer(A.map(it => it === null ? '#' : it));
};

describe('LeetOJ 103-BinaryTreeZigzagLevelOrderTraversal.js', () => {
  describe('zigzagLevelOrder', () => {
    it('should solve the given example', () => {
      const input = fromArray([3, 9, 20, null, null, 15, 7]);

      const expected = [
        [3],
        [20, 9],
        [15, 7]
      ];
      expect(zigzagLevelOrder(input)).to.eql(expected);
    });
  });
});
