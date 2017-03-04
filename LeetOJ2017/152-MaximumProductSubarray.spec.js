import { expect } from 'chai';
import maxProduct from './152-MaximumProductSubarray';

describe('LeetOJ 152-MaximumProductSubarray', () => {
  describe('maxProduct', () => {
    it('should solve the given example', () => {
      const input = [2, 3, -2, 4];
      const expected = 6;
      expect(maxProduct(input)).to.equal(expected);
    });

    it('should solve the test case [-2]', () => {
      const input = [-2];
      const expected = -2;
      expect(maxProduct(input)).to.equal(expected);
    });

    it('should solve the test case [-2, 0]', () => {
      const input = [-2, 0];
      const expected = 0;
      expect(maxProduct(input)).to.equal(expected);
    });

    it('should solve the test case [0, -2]', () => {
      const input = [0, -2];
      const expected = 0;
      expect(maxProduct(input)).to.equal(expected);
    });

    it('should solve the test case [2,0.5,2]', () => {
      const input = [2,0.5,2];
      const expected = 2;
      expect(maxProduct(input)).to.equal(expected);
    });

    it('should solve the test case [-2,3,-4]', () => {
      const input = [-2,3,-4];
      const expected = 24;
      expect(maxProduct(input)).to.equal(expected);
    });

    it('should solve the test case [-2,-2,3,-4]', () => {
      const input = [-2,-2,3,-4];
      const expected = 24;
      expect(maxProduct(input)).to.equal(expected);
    });

    it('should solve the test case [-2,-2,3,-4,-1]', () => {
      const input = [-2,-2,3,-4,-1];
      const expected = 48;
      expect(maxProduct(input)).to.equal(expected);
    });
  });
});
