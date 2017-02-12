import {expect} from 'chai';
import totalHammingDistance from './477-TotalHammingDistance';

describe('LeetOJ 477-TotalHammingDistance', () => {

  describe('totalHammingDistance', () => {
    it('should solve the given example', () => {
      const input = [4, 14, 2];
      expect(totalHammingDistance(input)).to.equal(6);
    });
    it('should solve test case', () => {
      const input = [1, 0];
      expect(totalHammingDistance(input)).to.equal(1);
    });
    it('should solve test case', () => {
      const input = [1, 1];
      expect(totalHammingDistance(input)).to.equal(0);
    });
    it('should solve test case', () => {
      const input = [1, 0];
      expect(totalHammingDistance(input)).to.equal(1);
    });
    it('should solve test case', () => {
      const input = [1, 1, 0];
      expect(totalHammingDistance(input)).to.equal(2);
    });
    it('should solve test case', () => {
      const input = [1, 1, 0, 0, 0];
      expect(totalHammingDistance(input)).to.equal(6);
    });
  });
});