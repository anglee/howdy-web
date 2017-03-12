import { expect } from 'chai';
import solution from './howdy';

const { encode, decode } = solution;

describe('solution', () => {
  it('should solve the given example', () => {
    const input = 'https://leetcode.com/problems/design-tinyurl';
    expect(decode(encode(input))).to.equal(input);
  });
  it('should solve the given example', () => {
    const input = 'https://google.com//';
    expect(decode(encode(input))).to.equal(input);
  });
});
