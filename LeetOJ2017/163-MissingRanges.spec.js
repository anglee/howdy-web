import { expect } from 'chai';
import findMissingRanges from './163-MissingRanges';

describe('LeetOJ 163-MissingRanges', () => {
  describe('findMissingRanges', () => {
    it('should solve the given example', () => {
      const nums = [0, 1, 3, 50, 75];
      const lower = 0;
      const upper = 99;
      expect(findMissingRanges(nums, lower, upper)).to.eql([
        "2",
        "4->49",
        "51->74",
        "76->99"
      ]);
    });

    it('should solve the test case 1', () => {
      const nums = [];
      const lower = 1;
      const upper = 1;
      expect(findMissingRanges(nums, lower, upper)).to.eql([
        "1",
      ]);
    });

    it('should solve the test case 2', () => {
      const nums = [-1];
      const lower = -1;
      const upper = -1;
      expect(findMissingRanges(nums, lower, upper)).to.eql([]);
    });

    it('should solve the test case 3 (duplicate)', () => {
      const nums = [1, 1, 1];
      const lower = 1;
      const upper = 1;
      expect(findMissingRanges(nums, lower, upper)).to.eql([]);
    });
  });
});
