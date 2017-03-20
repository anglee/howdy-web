import { expect } from 'chai';
import isAnagram from './242-ValidAnagram';

describe('LeetOJ 242-ValidAnagram', () => {
  describe('isAnagram', () => {
    it('should solve the given example 1', () => {
      expect(isAnagram('anagram', 'nagaram')).to.equal(true);
    });
    it('should solve the given example 2', () => {
      expect(isAnagram('rat', 'car')).to.equal(false);
    });
  });
});
