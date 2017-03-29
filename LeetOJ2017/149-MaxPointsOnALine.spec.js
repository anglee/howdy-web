import { expect } from 'chai';
import maxPoints from './149-MaxPointsOnALine';

function Point(x, y) {
  this.x = x;
  this.y = y;
}

describe('LeetOJ 149-MaxPointsOnALine', () => {
  describe('maxPoints', () => {
    it('should solve test case 1', () => {
      const points = [
        new Point(0, 0),
        new Point(1, 1),
        new Point(2, 2),
        new Point(0, 2),
      ];
      const expected = 3;
      expect(maxPoints(points)).to.equal(expected);
    });
    it('should solve test case 2', () => {
      const points = [
        new Point(0, 0),
        new Point(1, 1),
        new Point(2, 2),
        new Point(3, -3),
        new Point(0, 2),
        new Point(-1, 1),
        new Point(1, -1),
      ];
      const expected = 4;
      expect(maxPoints(points)).to.equal(expected);
    });
    it('should solve OJ test case 1', () => {
      const points = [
        new Point(1, 1),
        new Point(1, 1),
        new Point(2, 2),
        new Point(2, 2),
      ];
      const expected = 4;
      expect(maxPoints(points)).to.equal(expected);
    });
    it('should solve OJ test case 2', () => {
      const points = [
        new Point(1, 1),
        new Point(1, 1),
        new Point(1, 1),
      ];
      const expected = 3;
      expect(maxPoints(points)).to.equal(expected);
    });
    it('should solve OJ test case 3', () => {
      const points = [
        new Point(0, 0),
        new Point(94911151, 94911150),
        new Point(94911152, 94911151),
      ];
      const expected = 2;
      expect(maxPoints(points)).to.equal(expected);
    });
  });
});
