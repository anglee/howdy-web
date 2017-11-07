import { expect } from 'chai';
import addTwoNumbers from './445-AddTwoNumbersII';
import { fromArray, toArray } from '../lib/LinkedList';

describe('LeetOJ 445-AddTwoNumbersII', () => {
  describe('addTwoNumbers', () => {
    it('should solve the given example', () => {
      const l1 = fromArray([7, 2, 4, 3]);
      const l2 = fromArray([5, 6, 4]);
      expect(toArray(addTwoNumbers(l1, l2))).to.eql([7, 8, 0, 7]);
    });
  });
});
