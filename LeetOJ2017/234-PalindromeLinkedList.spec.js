import { expect } from 'chai';
import {
  fromArray,
  toArray,
  reverse
} from '../lib/LinkedList';
import isPalindrome from './234-PalindromeLinkedList';

describe('LeetOJ 234-PalindromeLinkedList', () => {

  describe('isPalindrome', () => {
    it('should solve test case 1', () => {
      const head = fromArray([]);
      expect(isPalindrome(head)).to.be.true;
    });
    it('should solve test case 2', () => {
      const head = fromArray([1]);
      expect(isPalindrome(head)).to.be.true;
    });
    it('should solve test case 3', () => {
      const head = fromArray([1, 2]);
      expect(isPalindrome(head)).to.be.false;
    });
    it('should solve test case 4', () => {
      const head = fromArray([2, 2]);
      expect(isPalindrome(head)).to.be.true;
    });
    it('should solve test case 5', () => {
      const head = fromArray([1, 2, 3]);
      expect(isPalindrome(head)).to.be.false;
    });
    it('should solve test case 6', () => {
      const head = fromArray([1, 2, 1]);
      expect(isPalindrome(head)).to.be.true;
    });
  });
});