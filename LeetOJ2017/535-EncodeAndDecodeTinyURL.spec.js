import { expect } from 'chai';
import solution from './535-EncodeAndDecodeTinyURL';

const { encode, decode } = solution;

describe('LeetOJ 535-EncodeAndDecodeTinyURL', () => {
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
});
