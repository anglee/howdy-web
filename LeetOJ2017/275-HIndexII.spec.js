import {expect} from 'chai';
import hIndex from './275-HIndexII';

describe('LeeOJ 275-HIndexII', () => {

  describe('hIndex', () => {
    it('should solve the given example', () => {
      expect(hIndex([0, 1, 3, 5, 6])).to.equal(3);
    });
    it('should solve test case []', () => {
      expect(hIndex([])).to.equal(0);
    });
    it('should solve test case [0]', () => {
      expect(hIndex([0])).to.equal(0);
    });
    it('should solve test case [1]', () => {
      expect(hIndex([1])).to.equal(1);
    });
    it('should solve test case [2]', () => {
      expect(hIndex([1])).to.equal(1);
    });
    it('should solve test case [0,0]', () => {
      expect(hIndex([0, 0])).to.equal(0);
    });
    it('should solve test case [0,1]', () => {
      expect(hIndex([0, 1])).to.equal(1);
    });
    it('should solve test case [0,2]', () => {
      expect(hIndex([0, 2])).to.equal(1);
    });
    it('should solve test case [1,2]', () => {
      expect(hIndex([1, 2])).to.equal(1);
    });
    it('should solve test case [2,2]', () => {
      expect(hIndex([2, 2])).to.equal(2);
    });
    it('should solve test case [2,2,2]', () => {
      expect(hIndex([2, 2, 2])).to.equal(2);
    });

    it('should solve test case [0,99,99,99,99]', () => {
      expect(hIndex([0, 99, 99, 99, 99])).to.equal(4);
    });
    it('should solve test case [4,99,99,99,99]', () => {
      expect(hIndex([4, 99, 99, 99, 99])).to.equal(4);
    });
    it('should solve test case [5,99,99,99,99]', () => {
      expect(hIndex([5, 99, 99, 99, 99])).to.equal(5);
    });
  });
});