import { expect } from 'chai';
import findDuplicate from './287-FindTheDuplicateNumber';

describe('LeetOJ 287-FindTheDuplicateNumber', () => {
  describe('findDuplicate', () => {
    it('should solve the given example', () => {
      const input = [1, 2, 3, 2];
      const expected = 2;
      expect(findDuplicate(input)).to.equal(expected);
    });
  });
});
