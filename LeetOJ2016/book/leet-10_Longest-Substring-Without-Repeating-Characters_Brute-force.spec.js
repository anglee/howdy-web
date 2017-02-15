import {expect} from 'chai';
import howdy from './leet-10_Longest-Substring-Without-Repeating-Characters_Brute-force';

describe('leet-10_Longest-Substring-Without-Repeating-Characters_Brute-force', () => {
  it('find the longest substring without repeating characters', () => {
    const input = 'abcabcbb';
    expect(howdy(input)).to.equal('abc');
  });
  it('find the longest substring without repeating characters', () => {
    const input = 'bcbcabc';
    expect(howdy(input)).to.equal('bca');
  });
  it('find the longest substring without repeating characters', () => {
    const input = 'bcbcabcd';
    expect(howdy(input)).to.equal('abcd');
  });
  it('find the longest substring without repeating characters', () => {
    const input = 'bbbbb';
    expect(howdy(input)).to.equal('b');
  });
  it('find the longest substring without repeating characters', () => {
    const input = '';
    expect(howdy(input)).to.equal('');
  });

});
