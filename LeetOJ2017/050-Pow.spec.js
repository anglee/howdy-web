import {expect} from 'chai';
import myPow from './050-Pow';

describe('LeeOJ 050-Pow', () => {

  describe('myPow', () => {

    it('should solve the test case 0', () => {
      expect(myPow(8.88023, 3)).to.equal(700.2814829452681);
    });

    it('should solve the test case 1', () => {
      expect(myPow(2, 3)).to.equal(8);
    });

    it('should solve the test case 2', () => {
      expect(myPow(3, 2)).to.equal(9);
    });

    it('should solve the test case 3', () => {
      expect(myPow(2, 10)).to.equal(1024);
    });

    it('should solve the test case 4', () => {
      expect(myPow(2, -3)).to.equal(0.125);
    });
  });
});