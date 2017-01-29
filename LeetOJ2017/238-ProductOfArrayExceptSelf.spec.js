import {expect} from 'chai';
import productExceptSelf from './238-ProductOfArrayExceptSelf';

describe.only('LeetOJ 238-ProductOfArrayExceptSelf', () => {
  describe('productExceptSelf', () => {
    it('should solve the given example', () => {
      const input = [1, 2, 3, 4];
      expect(productExceptSelf(input)).to.eql([24, 12, 8, 6]);
    });
  });
});
