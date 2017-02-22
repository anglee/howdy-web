import { expect } from 'chai';
import validTree from './261-GraphValidTree';


describe('LeetOJ 261-GraphValidTree', () => {

  describe('validTree', () => {

    it('should solve the given example 1', () => {
      const n = 5;
      const edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
      expect(validTree(n, edges)).to.equal(true);
    });

    it('should solve the given example 2', () => {
      const n = 5;
      const edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]];
      expect(validTree(n, edges)).to.equal(false);
    });

    it('should solve test case 1', () => {
      const n = 5;
      const edges = [[0, 1], [1, 2], [2, 3]];
      expect(validTree(n, edges)).to.equal(false);
    });

    it('should solve test case 2', () => {
      const n = 4;
      const edges = [[0, 1], [1, 2], [2, 3]];
      expect(validTree(n, edges)).to.equal(true);
    });

    it('should solve test case 3', () => {
      const n = 5;
      const edges = [[0, 1], [1, 2], [3, 4]];
      expect(validTree(n, edges)).to.equal(false);
    });

  });
});