import {expect} from 'chai';
import {
  fromArray,
  toArray,
  reverse
} from './LinkedList';

describe('LinkedList', () => {
  describe('fromArray', () => {
    it('should build a linked list from an array and return head', () => {
      const array = [1,2,3,4];
      const head = fromArray(array);
      expect(head.val).to.equal(1);
      expect(head.next.val).to.equal(2);
      expect(head.next.next.val).to.equal(3);
      expect(head.next.next.next.val).to.equal(4);
      expect(head.next.next.next.next).to.be.null;
    });
  });

  describe('toArray', () => {
    it('should create an array filled with the values in the linked list', () => {
      const array = [1,2,3,4];
      const head = fromArray(array);
      const actual = toArray(head);
      expect(actual).to.eql(array);
    });
  });


  describe('reverse', () => {
    it('should reverse a linked list', () => {
      const array = [1,2,3,4];
      const head = reverse(fromArray(array));
      const actual = toArray(head);
      expect(actual).to.eql(array.reverse());
    });
  });
});
