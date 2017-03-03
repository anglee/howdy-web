import { expect } from 'chai';
import { treeDeserializer } from '../lib/tree';
import isSymmetric from './101-SymmetricTree';

describe('LeetOJ 101-SymmetricTree', () => {
  describe('isSymmetric', () => {
    it('should solve the given example 1', () => {
      const root = treeDeserializer([1, 2, 2, 3, 4, 4, 3]);
      expect(isSymmetric(root)).to.be.true;
    });
    it('should solve the given example 2', () => {
      const root = treeDeserializer([1, 2, 2, null, 3, null, 3], null);
      expect(isSymmetric(root)).to.be.false;
    });
    it('should return trun when input is a empty tree', () => {
      const root = treeDeserializer([]);
      expect(isSymmetric(root)).to.be.true;
    });

  });
});
