import { expect } from 'chai';
import countSmaller from './315-CountOfSmallerNumbersAfterSelf';

describe('LeetOJ 315-CountOfSmallerNumbersAfterSelf', () => {
  describe('countSmaller', () => {
    it('should solve the given example', () => {
      const nums = [5, 2, 6, 1];
      const expected = [2, 1, 1, 0];
      expect(countSmaller(nums)).to.eql(expected);
    });
  });
});
