import {expect} from 'chai';
import hammingDistance from './461-HammingDistance';

describe('LeeOJ 461-HammingDistance', () => {

  describe('hammingDistance', () => {
    it('should solve the given example', () => {
      expect(hammingDistance(1, 4)).to.equal(2);
    });
  });
});