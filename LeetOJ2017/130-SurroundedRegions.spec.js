import { expect } from 'chai';
import solve from './130-SurroundedRegions';

describe('LeetOJ 130-SurroundedRegions', () => {
  describe('solve', () => {
    it('should solve the given example', () => {
      const board = [
        "XXXX",
        "XOOX",
        "XXOX",
        "XOXX"
      ].map(row => row.split(''));
      solve(board);
      const after = board.map(row => row.join(''));
      expect(after).to.eql([
        "XXXX",
        "XXXX",
        "XXXX",
        "XOXX"
      ]);
    });

    it('should solve the test case 1', () => {
      const board = [
        "OOOOOO",
        "OXXXXO",
        "OXOOXO",
        "OXOOXO",
        "OXXXXO",
        "OOOOOO"
      ].map(row => row.split(''));
      solve(board);
      const after = board.map(row => row.join(''));
      expect(after).to.eql([
        "OOOOOO",
        "OXXXXO",
        "OXXXXO",
        "OXXXXO",
        "OXXXXO",
        "OOOOOO"
      ]);
    });
    it('should not exceed call stack maximum', () => {
      const allO = Array(200).fill('O').join('');
      const firstLastO = `O${Array(198).fill('X').join('')}O`;
      const middleO = `OX${Array(196).fill('O').join('')}XO`;

      const board = [
        allO,
        firstLastO,
          ...Array(196).fill(middleO),
        firstLastO,
        allO,
      ].map(row => row.split(''));
      solve(board);
      const after = board.map(row => row.join(''));
      expect(after).to.eql([
        allO,
          ...Array(198).fill(firstLastO),
        allO,
      ]);
    });
  });
});
