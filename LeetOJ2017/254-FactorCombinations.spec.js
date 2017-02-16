import { expect } from 'chai';
import { sortAA as process } from '../lib/compare';
import getFactors from './254-FactorCombinations';

describe('LeetOJ 254-FactorCombinations', () => {

  describe('getFactors', () => {
    it('should solve the given example 1', () => {
      expect(getFactors(1)).to.eql([]);
    });
    it('should solve the given example 37', () => {
      expect(getFactors(37)).to.eql([]);
    });
    it('should solve the given example 12', () => {
      expect(process(getFactors(12))).to.eql(process([
        [2, 2, 3],
        [2, 6],
        [3, 4]
      ]));
    });
    it('should solve the given example 32', () => {
      expect(process(getFactors(32))).to.eql(process([
        [2, 2, 2, 2, 2],
        [2, 2, 2, 4],
        [2, 2, 8],
        [2, 4, 4],
        [2, 16],
        [4, 8]
      ]));
    });

    it('should solve the test case 2', () => {
      expect(getFactors(2)).to.eql([]);
    });
    it('should solve the test case 3', () => {
      expect(getFactors(3)).to.eql([]);
    });
    it('should solve the test case 4', () => {
      expect(getFactors(4)).to.eql([
        [2, 2]
      ]);
    });
  });
});
