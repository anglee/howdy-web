import {expect} from 'chai';
import merge from './056-MergeIntervals';

describe('LeetOJ 056-MergeIntervals', () => {
  describe('merge', () => {
    it('should work with given example', () => {
      const input = [[1, 3], [2, 6], [8, 10], [15, 18]];
      const expected = [[1, 6], [8, 10], [15, 18]];
      expect(merge(input)).to.eql(expected);
    });
    it('should work with test case', () => {
      const input = [[1, 2], [2, 3]];
      const expected = [[1, 3]];
      expect(merge(input)).to.eql(expected);
    });
    it('should work with test case', () => {
      const input = [[2, 3], [1, 2]];
      const expected = [[1, 3]];
      expect(merge(input)).to.eql(expected);
    });
    it('should work with empty test case', () => {
      const input = [];
      const expected = [];
      expect(merge(input)).to.eql(expected);
    });
    it('should work with empty test case', () => {
      const input = [[1, 3]];
      const expected = [[1, 3]];
      expect(merge(input)).to.eql(expected);
    });
  });
});
