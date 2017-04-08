import { expect } from 'chai';
import MovingAverage from './346-MovingAverageFromDataStream';

describe('LeetOJ 346-MovingAverageFromDataStream', () => {
  describe('MovingAverage', () => {
    it('should solve the given example', () => {
      const m = new MovingAverage(3);
      expect(m.next(1)).to.equal(1);
      expect(m.next(10)).to.equal((1 + 10) / 2);
      expect(m.next(3)).to.equal((1 + 10 + 3) / 3);
      expect(m.next(5)).to.equal((10 + 3 + 5) / 3);
    });
  });
});
