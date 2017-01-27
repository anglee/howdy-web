import {expect} from 'chai';
import exist from './079-WordSearch';

describe('LeetOJ 079-WordSearch', () => {
  describe('exist', () => {
    it('should solve the given example', () => {
      const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
      ];
      const word = 'ABCCED';
      expect(exist(board, word)).to.be.true;
    });
    it('should solve the given example', () => {
      const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
      ];
      const word = 'SEE';
      expect(exist(board, word)).to.be.true;
    });
    it('should solve the given example', () => {
      const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
      ];
      const word = 'ABCB';
      expect(exist(board, word)).to.be.false;
    });

  });
});
