import { expect } from 'chai';
import maxKilledEnemies from './361-BombEnemy';

describe('LeetOJ 361-BombEnemy', () => {
  describe('maxKilledEnemies', () => {
    it('should solve the given example', () => {
      const input = [
        ["0", "E", "0", "0"],
        ["E", "0", "W", "E"],
        ["0", "E", "0", "0"]
      ];
      const expected = 3;
      expect(maxKilledEnemies(input)).to.equal(expected);
    });
    it('should solve the empty input', () => {
      const input = [];
      const expected = 0;
      expect(maxKilledEnemies(input)).to.equal(expected);
    });
    it('should solve OJ test case 1', () => {
      const input = [['E']];
      const expected = 0;
      expect(maxKilledEnemies(input)).to.equal(expected);
    });
  });
});
