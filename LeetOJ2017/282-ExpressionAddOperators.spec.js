import { expect } from 'chai';
import addOperators from './282-ExpressionAddOperators';

describe('LeetOJ 282-ExpressionAddOperators', () => {
  describe('addOperators', () => {
    it('should solve the given examples 1', () => {
      expect(addOperators("123", 6)).to.have.all.members(["1+2+3", "1*2*3"]);
    });
    it('should solve the given examples 2', () => {
      expect(addOperators("232", 8)).to.have.all.members(["2*3+2", "2+3*2"]);
    });
    it('should solve the given examples 3', () => {
      expect(addOperators("105", 5)).to.have.all.members(["1*0+5", "10-5"]);
    });
    it('should solve the given examples 4', () => {
      expect(addOperators("00", 0)).to.have.all.members(["0+0", "0-0", "0*0"]);
    });
    it.skip('should solve the given examples 5', () => {
      expect(addOperators("3456237490", 9191)).to.have.all.members([]);
    });
    it('should solve the OJ test case', () => {
      expect(addOperators("", 5)).to.have.all.members([]);
    });
  });
});
