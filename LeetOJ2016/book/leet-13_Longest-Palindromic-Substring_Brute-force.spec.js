import { expect } from 'chai';
import howdy from './leet-13_Longest-Palindromic-Substring_Brute-force';

describe('leet-13_Longest-Palindromic-Substring_Brute-force', () => {
  it('should find the longest palindromic substring', () => {
    const input = 'acbcd';
    expect(howdy(input)).to.equal('cbc');
  });
  it('should find the longest palindromic substring', () => {
    const input = 'abc';
    expect(howdy(input)).to.equal('a');
  });
  it('should find the longest palindromic substring', () => {
    const input = 'a';
    expect(howdy(input)).to.equal('a');
  });
});
