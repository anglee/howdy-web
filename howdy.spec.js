import {expect} from 'chai';
import howdy from './howdy';

describe('howdy', () => {
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
