import { expect } from 'chai';
import largestValues from './515-FindLargestValueInEachTreeRow';
import { treeDeserializer } from '../lib/tree';

describe('LeetOJ 515-FindLargestValueInEachTreeRow', () => {
  describe('largestValues', () => {
    it('should solve the given example', () => {
      const root = treeDeserializer([1, 3, 2, 5, 3, '#', 9]);
      const expected = [1, 3, 9];
      expect(largestValues(root)).to.eql(expected);
    });
    it('should solve OJ test case 1', () => {
      const root = treeDeserializer([]);
      const expected = [];
      expect(largestValues(root)).to.eql(expected);
    });
  });
});
