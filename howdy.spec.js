import {expect} from 'chai';
import howdy from './howdy';

describe('howdy', () => {
  describe('should reverse Integer', () => {
    it('should reverse 0', () => {
      expect(howdy(0)).to.equal(0);
    });
    it('should reverse 1', () => {
      expect(howdy(1)).to.equal(1);
    });
    it('should reverse 123', () => {
      expect(howdy(123)).to.equal(321);
    });
    it('should reverse 120', () => {
      expect(howdy(120)).to.equal(21);
    });
    it('should reverse 1234', () => {
      expect(howdy(1234)).to.equal(4321);
    });
  });

});
