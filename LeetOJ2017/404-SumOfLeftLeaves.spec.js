import {expect} from 'chai';
import { treeDeserializer } from '../lib/tree';
import sumOfLeftLeaves from './404-SumOfLeftLeaves';

describe('LeeOJ 404-SumOfLeftLeaves', () => {

  describe('sumOfLeftLeaves', () => {
    it('should solve the given example', () => {
      const input = treeDeserializer([3, 9, 20, '#', '#', 15, 7]);
      expect(sumOfLeftLeaves(input)).to.equal(24);
    });
    it('should solve test case 1', () => {
      const input = treeDeserializer([1, 2, 3, 4, 5]);
      expect(sumOfLeftLeaves(input)).to.equal(4);
    });
  });
});
