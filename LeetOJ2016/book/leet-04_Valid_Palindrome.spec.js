import { expect } from 'chai';
import {isPalindrome} from './leet-04_Valid_Palindrome';

describe('leet-04_Valid_Palindrome', () => {
  it('should be able to determine the input string is a palindrome', () => {
    const input = 'A man, a plan, a canal: Panama';
    expect(isPalindrome(input)).to.be.true;
  });
  it('should be able to determine the input string is a palindrome', () => {
    const input = 'race a car';
    expect(isPalindrome(input)).to.be.false;
  });
  it('should be able to determine the input string is a palindrome', () => {
    const input = 'ABA';
    expect(isPalindrome(input)).to.be.true;
  });
  it('should be able to determine the input string is a palindrome', () => {
    const input = 'ABC';
    expect(isPalindrome(input)).to.be.false;
  });
});
