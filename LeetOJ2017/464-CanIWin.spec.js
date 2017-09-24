import { expect } from 'chai';
import canIWin from './464-CanIWin';

describe('LeetOJ 464-CanIWin', () => {
  describe('canIWin', () => {
    it('should solve the given example', () => {
      const maxChoosableInteger = 10;
      const desiredTotal = 11;
      expect(canIWin(maxChoosableInteger, desiredTotal)).to.be.false;
    });
    it('should solve OJ test case 1', () => {
      const maxChoosableInteger = 18;
      const desiredTotal = 79;
      expect(canIWin(maxChoosableInteger, desiredTotal)).to.be.true;
    });
    it('should solve OJ test case 2', () => {
      const maxChoosableInteger = 20;
      const desiredTotal = 210;
      expect(canIWin(maxChoosableInteger, desiredTotal)).to.be.false;
    });
    it('should solve OJ test case 3', () => {
      const maxChoosableInteger = 20;
      const desiredTotal = 209;
      expect(canIWin(maxChoosableInteger, desiredTotal)).to.be.false;
    });
    it('should solve OJ test case 4', () => {
      const maxChoosableInteger = 16;
      const desiredTotal = 100;
      expect(canIWin(maxChoosableInteger, desiredTotal)).to.be.true;
    });
    it('should solve OJ test case 5', () => {
      const maxChoosableInteger = 10;
      const desiredTotal = 40;
      expect(canIWin(maxChoosableInteger, desiredTotal)).to.be.false;
    });
    it('should solve OJ test case 6', () => {
      const maxChoosableInteger = 5;
      const desiredTotal = 50;
      expect(canIWin(maxChoosableInteger, desiredTotal)).to.be.false;
    });
    it('should solve OJ test case 7', () => {
      const maxChoosableInteger = 18;
      const desiredTotal = 171;
      expect(canIWin(maxChoosableInteger, desiredTotal)).to.be.false;
    });
  });
});
