import {expect} from 'chai';
import NestedIterator from './341-FlattenNestedListIterator';


describe('LeetOJ 341-FlattenNestedListIterator', () => {

  describe('NestedIterator', () => {
    it('should work with given example 1 (a)', () => {
      const input = [[1, 1], 2, [1, 1]];
      const itor = new NestedIterator(input);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(1);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(1);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(2);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(1);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(1);
      expect(itor.hasNext()).to.be.false;
    });

    it('should work with given example 1 (b)', () => {
      const input = [[1, 1], 2, [1, 1]];
      const itor = new NestedIterator(input);
      expect(itor.next()).to.equal(1);
      expect(itor.next()).to.equal(1);
      expect(itor.next()).to.equal(2);
      expect(itor.next()).to.equal(1);
      expect(itor.next()).to.equal(1);
      expect(itor.hasNext()).to.be.false;
    });


    it('should work with given example 1 (c)', () => {
      const input = [[1, 1], 2, [1, 1]];
      var i = new NestedIterator(input), a = [];
      while (i.hasNext()) a.push(i.next());
      expect(a).to.eql([1, 1, 2, 1, 1]);
    });


    it('should work with given example 2', () => {
      const input = [1, [4, [6]]];
      const itor = new NestedIterator(input);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(1);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(4);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(6);
      expect(itor.hasNext()).to.be.false;
    });

    it('should work with empty test case 1', () => {
      const input = [];
      const itor = new NestedIterator(input);
      expect(itor.hasNext()).to.be.false;
    });

    it('should work with empty test case 2', () => {
      const input = [[[]]];
      const itor = new NestedIterator(input);
      expect(itor.hasNext()).to.be.false;
    });

    it('should work with empty test case 3', () => {
      const input = [1, [[]]];
      const itor = new NestedIterator(input);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(1);
      expect(itor.hasNext()).to.be.false;
    });
  });
});
