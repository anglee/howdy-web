import { expect } from 'chai';
import oddEvenList from './328-OddEvenLinkedList';
import * as LinkedList from '../lib/LinkedList';

describe('LeetOJ 328-OddEvenLinkedList', () => {
  describe('oddEvenList', () => {
    it('should solve the given example', () => {
      const listHead = LinkedList.fromArray([1, 2, 3, 4, 5]);
      const newList = oddEvenList(listHead);
      expect(LinkedList.toArray(newList)).to.eql([1, 3, 5, 2, 4]);
    });

    it('should solve the case of empty input', () => {
      const listHead = LinkedList.fromArray([]);
      const newList = oddEvenList(listHead);
      expect(LinkedList.toArray(newList)).to.eql([]);
    });
  });
});
