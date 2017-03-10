import { expect } from 'chai';
import reverseString from './344-ReverseString';

describe('LeetOJ 344-ReverseString', () => {
  describe('reverseString', () => {
    it('should solve the given example', () => {
      const input = '1234';
      const expected = '4321';
      expect(reverseString(input)).to.equal(expected);
    });
  });
});
