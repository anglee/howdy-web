import { expect } from 'chai';
import {
  treeDeserializer as fromArray,
  treeSerializer as toArray,
} from '../lib/tree'
import invertTree from './226-InvertBinaryTree';

describe('LeetOJ 226-InvertBinaryTree', () => {
  describe('invertTree', () => {
    it('should solve the given example', () => {
      const input = fromArray([4, 2, 7, 1, 3, 6, 9]);
      const inverted = invertTree(input);
      expect(toArray(inverted)).to.eql([4, 7, 2, 9, 6, 3, 1]);
    });
  });
});
