import {expect} from 'chai';
import {isPalindrome} from './howdy';

describe('howdy', () => {
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
