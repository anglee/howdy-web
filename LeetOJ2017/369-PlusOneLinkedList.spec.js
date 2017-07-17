import { expect } from 'chai';
import plusOne from './369-PlusOneLinkedList';
import { fromArray, toArray } from '../lib/LinkedList';

describe('LeetOJ 369-PlusOneLinkedList', () => {
  describe('plusOne', () => {
    it('should solve the given example', () => {
      expect(toArray(plusOne(fromArray([1,2,3])))).to.eql([1,2,4]);
    });
    it('should solve test case 199', () => {
      expect(toArray(plusOne(fromArray([1,9,9])))).to.eql([2,0,0]);
    });
    it('should solve test case 99', () => {
      expect(toArray(plusOne(fromArray([9,9])))).to.eql([1,0,0]);
    });
  });
});
