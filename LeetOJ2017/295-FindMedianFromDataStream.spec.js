import { expect } from 'chai';
import MedianFinder from './295-FindMedianFromDataStream';

describe('LeetOJ 295-FindMedianFromDataStream', () => {
  describe('MedianFinder', () => {
    it('should solve the given example', () => {
      const m = new MedianFinder();
      m.addNum(1);
      expect(m.findMedian()).to.equal(1);
      m.addNum(2);
      expect(m.findMedian()).to.equal(1.5);
      m.addNum(3);
      expect(m.findMedian()).to.equal(2);
    });
    it('should solve OJ test case 1', () => {
      const m = new MedianFinder();
      m.addNum(-1);
      expect(m.findMedian()).to.equal(-1);
      m.addNum(-2);
      expect(m.findMedian()).to.equal(-1.5);
      m.addNum(-3);
      expect(m.findMedian()).to.equal(-2);
      m.addNum(-4);
      expect(m.findMedian()).to.equal(-2.5);
      m.addNum(-5);
      expect(m.findMedian()).to.equal(-3);
    });
    it('should solve OJ test case 2', () => {
      const m = new MedianFinder();
      m.addNum(1);
      expect(m.findMedian()).to.equal(1);
      m.addNum(2);
      expect(m.findMedian()).to.equal(1.5);
      m.addNum(3);
      expect(m.findMedian()).to.equal(2);
      m.addNum(4);
      expect(m.findMedian()).to.equal(2.5);
      m.addNum(5);
      expect(m.findMedian()).to.equal(3);
      m.addNum(6);
      expect(m.findMedian()).to.equal(3.5);
      m.addNum(7);
      expect(m.findMedian()).to.equal(4);
      m.addNum(8);
      expect(m.findMedian()).to.equal(4.5);
      m.addNum(9);
      expect(m.findMedian()).to.equal(5);
      m.addNum(10);
      expect(m.findMedian()).to.equal(5.5);
    });
  });
});
