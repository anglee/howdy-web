import { expect } from 'chai';
import findMaxLength from './525-ContiguousArray';

describe('LeetOJ 525-ContiguousArray', () => {
  describe('findMaxLength', () => {
    it('should solve the given example 1', () => {
      expect(findMaxLength([0, 1])).to.equal(2);
    });
    it('should solve the given example 2', () => {
      expect(findMaxLength([0, 1, 0])).to.equal(2);
    });

    it('should solve test case []', () => {
      expect(findMaxLength([])).to.equal(0);
    });

    it('should solve test case [0]', () => {
      expect(findMaxLength([0])).to.equal(0);
    });

    it('should solve test case [1]', () => {
      expect(findMaxLength([1])).to.equal(0);
    });

    it('should solve test case [1,1]', () => {
      expect(findMaxLength([1, 1])).to.equal(0);
    });

    it('should solve test case [1,1,1,0,0,0,1,0,1,1,1,1]', () => {
      expect(findMaxLength([1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1])).to.equal(8);
    });
  });
});
