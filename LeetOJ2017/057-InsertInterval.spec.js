import { expect } from 'chai';
import insert, {Interval} from './057-InsertInterval';

const toInterval = ([start, end]) => new Interval(start, end);
const toIntervals = array => array.map(toInterval);


describe('LeetOJ 057-InsertInterval', () => {

  describe('insert', () => {

    it('should solve the given example 1', () => {
      const intervals = toIntervals([[1, 3], [6, 9]]);
      const newInterval = toInterval([2, 5]);
      expect(insert(intervals, newInterval))
        .to.eql(toIntervals([[1, 5], [6, 9]]));
    });

    it('should solve the given example 2', () => {
      const intervals = toIntervals([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]);
      const newInterval = toInterval([4, 9]);
      expect(insert(intervals, newInterval))
        .to.eql(toIntervals([[1, 2], [3, 10], [12, 16]]));
    });

    it('should solve test case 1', () => {
      const intervals = toIntervals([]);
      const newInterval = toInterval([5, 7]);
      expect(insert(intervals, newInterval))
        .to.eql(toIntervals([[5, 7]]));
    });

    it('should solve test case 2', () => {
      const intervals = toIntervals([[1, 5]]);
      const newInterval = toInterval([5, 7]);
      expect(insert(intervals, newInterval))
        .to.eql(toIntervals([[1, 7]]));
    });

    it('should solve test case 3', () => {
      const intervals = toIntervals([[1, 5]]);
      const newInterval = toInterval([1, 7]);
      expect(insert(intervals, newInterval))
        .to.eql(toIntervals([[1, 7]]));
    });

    it('should solve test case 4', () => {
      const intervals = toIntervals([[1, 5]]);
      const newInterval = toInterval([0, 1]);
      expect(insert(intervals, newInterval))
        .to.eql(toIntervals([[0, 5]]));
    });

    it('should solve test case 5', () => {
      const intervals = toIntervals([[1, 5]]);
      const newInterval = toInterval([0, 0]);
      expect(insert(intervals, newInterval))
        .to.eql(toIntervals([[0, 0], [1, 5]]));
    });
  });
});
