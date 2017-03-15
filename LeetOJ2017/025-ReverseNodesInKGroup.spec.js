import { expect } from 'chai';
import { fromArray, toArray } from '../lib/LinkedList'
import reverseKGroup from './025-ReverseNodesInKGroup';

describe('LeetOJ 025-ReverseNodesInKGroup', () => {
  describe('reverseKGroup', () => {
    it('should solve the given example', () => {
      const input = fromArray([1, 2, 3, 4, 5]);
      const k = 3;
      const output = reverseKGroup(input, k);
      expect(toArray(output)).to.eql([3, 2, 1, 4, 5]);
    });
  });
});
