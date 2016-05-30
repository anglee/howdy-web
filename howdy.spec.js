import {expect} from 'chai';
import maxSubArrayLen from './howdy';

describe('leetOJ-325_Maximum-Size-Subarray-Sum-Equals-k', () => {
  describe('maxSubArrayLen', () => {
    it('should work with given example', () => {
      const k = 3;
      const actual = maxSubArrayLen([1, -1, 5, -2, 3], k);
      expect(actual).to.equal(4);
    });
    it('should work with given example', () => {
      const k = 1;
      const actual = maxSubArrayLen([-2, -1, 2, 1], k);
      expect(actual).to.equal(2);
    });
  });
});
