import { expect } from 'chai';
import isValid from './leetOJ-020_Valid-Parentheses';

describe('leetOJ-020_Valid-Parentheses', () => {
  describe('isValid', () => {
    it('should solve the given example 1', () => {
      expect(isValid('()')).to.be.true;
    });

    it('should solve the given example 2', () => {
      expect(isValid('()[]{}')).to.be.true;
    });

    it('should solve the given example 3', () => {
      expect(isValid('(]')).to.be.false;
    });

    it('should solve the given example 4', () => {
      expect(isValid('([)]')).to.be.false;
    });

    it('should solve the given example 5', () => {
      expect(isValid('[')).to.be.false;
    });
  });

});
