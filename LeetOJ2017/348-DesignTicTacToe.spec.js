import { expect } from 'chai';
import TicTacToe from './348-DesignTicTacToe';

describe('LeetOJ 348-DesignTicTacToe', () => {
  describe('TicTacToe', () => {
    it('should solve the given example', () => {
      const toe = new TicTacToe(3);
      expect(toe.move(0, 0, 1)).to.equal(0);
      expect(toe.move(0, 2, 2)).to.equal(0);
      expect(toe.move(2, 2, 1)).to.equal(0);
      expect(toe.move(1, 1, 2)).to.equal(0);
      expect(toe.move(2, 0, 1)).to.equal(0);
      expect(toe.move(1, 0, 2)).to.equal(0);
      expect(toe.move(2, 1, 1)).to.equal(1);
    });
  });
});
