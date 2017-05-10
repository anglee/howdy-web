import { expect } from 'chai';
import mySqrt, {mySqrt0} from './069-SqrtX';

describe('LeetOJ 069-SqrtX', () => {

  describe('mySqrt0', () => {
    it('should solve test case 1', () => {
      expect(mySqrt0(4)).to.equal(2);
    });
    it('should solve test case 2', () => {
      expect(mySqrt0(0)).to.equal(0);
    });
    it('should solve test case 3', () => {
      expect(mySqrt0(1)).to.equal(1);
    });
    it('should solve test case 4', () => {
      expect(mySqrt0(2)).to.equal(1.414213562373095);
    });
    it('should solve test case 5', () => {
      expect(mySqrt0(3)).to.equal(1.7320508075688772);
    });
  });
  describe('mySqrt', () => {
    it('should solve test case 0', () => {
      expect(mySqrt(0)).to.equal(0);
    });
    it('should solve test case 1', () => {
      expect(mySqrt(1)).to.equal(1);
    });
    it('should solve test case 2', () => {
      expect(mySqrt(2)).to.equal(1);
    });
    it('should solve test case 3', () => {
      expect(mySqrt(3)).to.equal(1);
    });
    it('should solve test case 4', () => {
      expect(mySqrt(4)).to.equal(2);
    });
    it('should solve test case 100', () => {
      expect(mySqrt(100)).to.equal(10);
    });
    it('should solve test case 99', () => {
      expect(mySqrt(99)).to.equal(9);
    });
    it('should solve test case 101', () => {
      expect(mySqrt(101)).to.equal(10);
    });
    it('should solve test case -1', () => {
      expect(mySqrt(-1)).to.eql(Number.NaN);
    });
  });
});
