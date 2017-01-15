import {expect} from 'chai';
import reverse from './007-ReverseInteger';

describe('LeetOJ 007-ReverseInteger', () => {
  describe('reverse', () => {
    it('should work with given example 1', () => {
      const input = 123;
      expect(reverse(input)).to.equal(321);
    });

    it('should work with given example 2', () => {
      const input = -123;
      expect(reverse(input)).to.equal(-321);
    });

    it('should work with 0', () => {
      const input = 0;
      expect(reverse(input)).to.equal(0);
    });
  });
});


