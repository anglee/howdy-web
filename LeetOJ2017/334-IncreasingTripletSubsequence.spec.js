import { expect } from 'chai';
import increasingTriplet from './334-IncreasingTripletSubsequence';


describe('LeetOJ 334-IncreasingTripletSubsequence', () => {

  describe('increasingTriplet', () => {
    it('should solve the given example 1', () => {
      const nums = [1, 2, 3, 4, 5];
      expect(increasingTriplet(nums)).to.be.true;
    });
    it('should solve the given example 2', () => {
      const nums = [5, 4, 3, 2, 1];
      expect(increasingTriplet(nums)).to.be.false;
    });
    it('should solve OJ test case 1', () => {
      const nums = [1,2,-10,-8,-7];
      expect(increasingTriplet(nums)).to.be.true;
    });
  });
});
