import { expect } from 'chai';
import isIsomorphic from './205-IsomorphicStrings';

describe('LeetOJ 205-IsomorphicStrings', () => {
  describe('isIsomorphic', () => {
    it('should solve the given example 1', () => {
      expect(isIsomorphic('egg', 'add')).to.equal(true);
    });
    it('should solve the given example 2', () => {
      expect(isIsomorphic('foo', 'bar')).to.equal(false);
    });
    it('should solve the given example 3', () => {
      expect(isIsomorphic('paper', 'title')).to.equal(true);
    });
  });
});
