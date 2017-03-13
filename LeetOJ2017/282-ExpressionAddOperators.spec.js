import { expect } from 'chai';
import addOperators from './282-ExpressionAddOperators';

describe('LeetOJ 282-ExpressionAddOperators', () => {
  describe('addOperators', () => {
    it('should solve the given examples 1', () => {
      expect(addOperators("123", 6).sort()).to.eql(["1+2+3", "1*2*3"].sort());
    });
    it('should solve the given examples 2', () => {
      expect(addOperators("232", 8).sort()).to.eql(["2*3+2", "2+3*2"].sort());
    });
    it('should solve the given examples 3', () => {
      expect(addOperators("105", 5).sort()).to.eql(["1*0+5", "10-5"].sort());
    });
    it('should solve the given examples 4', () => {
      expect(addOperators("00", 0).sort()).to.eql(["0+0", "0-0", "0*0"].sort());
    });
    it.skip('should solve the given examples 5', () => {
      expect(addOperators("3456237490", 9191)).to.eql([]);
    });
  });
});
