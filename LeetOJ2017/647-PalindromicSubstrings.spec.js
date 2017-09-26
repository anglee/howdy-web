import { expect } from 'chai';
import countSubstrings from './howdy';

describe('countSubstrings', () => {
  it('should solve the given example 1', () => {
    const input = 'abc';
    const expected = 3;
    expect(countSubstrings(input)).to.equal(expected);
  });
  it('should solve the given example 2', () => {
    const input = 'aaa';
    const expected = 6;
    expect(countSubstrings(input)).to.equal(expected);
  });
});
