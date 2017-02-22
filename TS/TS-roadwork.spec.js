import { expect } from 'chai';
import fraudFeet from './TS-roadwork';

describe('TS-roadwork', () => {
  describe('should find total overlap', () => {
    it('example 1', () => {
      expect(fraudFeet([50, 50, 50], [58, 58, 58])).to.equal(8);
    });
    it('example 2', () => {
      expect(fraudFeet([171234, 12, 20, 30], [171236, 20, 30, 40])).to.equal(0);
    });
    it('example 3', () => {
      expect(fraudFeet([12, 32, 92], [991, 161, 1093])).to.equal(959);
    });
  });
});
