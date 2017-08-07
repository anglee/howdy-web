import { expect } from 'chai';
import summaryRanges from './228-SummaryRanges';

describe('LeetOJ 228-SummaryRanges', () => {
  describe('summaryRanges', () => {
    it('should solve the given example', () => {
      const input = [0, 1, 2, 4, 5, 7];
      const expected = ["0->2", "4->5", "7"];
      expect(summaryRanges(input)).to.eql(expected);
    });
  });
});
