import { expect } from 'chai';
import { treeDeserializer} from '../lib/tree';
import findSecondMinimumValue from './671-SecondMinimumNodeInABinaryTree';

describe('LeetOJ 671-SecondMinimumNodeInABinaryTree', () => {
  describe('findSecondMinimumValue', () => {
    it('should solve the given example 1', () => {
      const root = treeDeserializer([2, 2, 5, '#', '#', 5, 7]);
      const expected = 5;
      expect(findSecondMinimumValue(root)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const root = treeDeserializer([2, 2, 2]);
      const expected = -1;
      expect(findSecondMinimumValue(root)).to.equal(expected);
    });
    it('should solve OJ test case 1', () => {
      const root = treeDeserializer([1, 1, 2, 1, 1, 2, 2]);
      const expected = 2;
      expect(findSecondMinimumValue(root)).to.equal(expected);
    });
  });
});
