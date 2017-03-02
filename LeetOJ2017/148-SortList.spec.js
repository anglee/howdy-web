import { expect } from 'chai';
import sortList from './148-SortList';
import * as LinkedList from '../lib/LinkedList'

describe('LeetOJ 148-SortList', () => {
  describe('sortList', () => {
    it('should solve test case [1]', () => {
      const input = LinkedList.fromArray([1]);
      const result = sortList(input);
      expect(LinkedList.toArray(result)).to.eql([1]);
    });
    it('should solve test case [2,1]', () => {
      const input = LinkedList.fromArray([2, 1]);
      const result = sortList(input);
      expect(LinkedList.toArray(result)).to.eql([1, 2]);
    });
    it('should solve test case [1,2,4,3]', () => {
      const input = LinkedList.fromArray([1, 2, 4, 3]);
      const result = sortList(input);
      expect(LinkedList.toArray(result)).to.eql([1, 2, 3, 4]);
    });
    it('should solve test case []', () => {
      const input = LinkedList.fromArray([]);
      const result = sortList(input);
      expect(LinkedList.toArray(result)).to.eql([]);
    });
  });
});
