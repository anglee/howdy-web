import { expect } from 'chai';
import { treeDeserializer} from '../lib/tree';
import longestConsecutive from './298-BinaryTreeLongestConsecutiveSequence';

describe('LeetOJ 298-BinaryTreeLongestConsecutiveSequence', () => {
  describe('longestConsecutive', () => {
    it('should solve the given example 1', () => {
      const input = treeDeserializer([1, '#', 3, 2, 4, '#', '#', '#', 5]);
      //const expected = [3,4,5];
      const expected = 3;
      expect(longestConsecutive(input)).to.eql(expected);
    });
    it('should solve the given example 2', () => {
      const input = treeDeserializer([2, '#', 3, 2, '#', 4, 1]);
      // const expected = [2, 3];
      const expected = 2;
      expect(longestConsecutive(input)).to.eql(expected);
    });
  });
});
