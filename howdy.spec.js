import { expect } from 'chai';
import addOperators, { printAll } from './howdy';

describe('LeetOJ 282-ExpressionAddOperators', () => {

  describe('printAll', () => {
    it('should print all possible expressions', () => {
      expect(new Set(printAll('123'))).to.eql(new Set([
        '123',
        '1+23',
        '1-23',
        '1*23',
        '12+3',
        '1+2+3',
        '1-2+3',
        '1*2+3',
        '12-3',
        '1+2-3',
        '1-2-3',
        '1*2-3',
        '12*3',
        '1+2*3',
        '1-2*3',
        '1*2*3',
      ]));
    });
  });

  describe('addOperators', () => {
    it('should work with the given example 1', () => {
      expect(new Set(addOperators('123', 6))).to.eql(new Set([
        '1+2+3',
        '1*2*3',
      ]));
    });
    it('should work with the given example 2', () => {
      expect(new Set(addOperators('232', 8))).to.eql(new Set([
        '2*3+2',
        '2+3*2',
      ]));
    });
    it('should work with the given example 3', () => {
      expect(new Set(addOperators('105', 5))).to.eql(new Set([
        '1*0+5',
        '10-5',
      ]));
    });
    it('should work with the given example 4', () => {
      expect(new Set(addOperators('00', 0))).to.eql(new Set([
        '0+0',
        '0-0',
        '0*0',
      ]));
    });
  });
});
