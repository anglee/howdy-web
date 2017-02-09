import {expect} from 'chai';
import maximalSquare from './221-MaximalSquare';

describe('LeetOJ 221-MaximalSquare', () => {

  describe('maximalSquare', () => {
    it('should solve the given example', () => {
      const input = [
        [1, 0, 1, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0],
      ];
      expect(maximalSquare(input)).to.equal(4);
    });
    it('should solve test case 1', () => {
      const input = [
        [0],
      ];
      expect(maximalSquare(input)).to.equal(0);
    });
    it('should solve test case 2', () => {
      const input = [
        "11111111",
        "11111110",
        "11111110",
        "11111000",
        "01111000"
      ].map(row => row.split('').map(it => parseInt(it, 10)));
      expect(maximalSquare(input)).to.equal(16);
    });

  });
});