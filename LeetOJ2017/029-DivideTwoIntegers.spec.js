import { expect } from 'chai';
import divide from './029-DivideTwoIntegers';

describe('LeetOJ 029-DivideTwoIntegers', () => {
  describe('divide', () => {
    it('should solve test case 1', () => {
      expect(divide(4, 2)).to.equal(2);
    });
    it('should solve test case 2', () => {
      expect(divide(6, 2)).to.equal(3);
    });
    it('should solve test case 2', () => {
      expect(divide(7, 2)).to.equal(3);
    });
    it('should solve test case 3', () => {
      expect(divide(1024, 5)).to.equal(204);
    });

    it('should solve OJ test case 1', () => {
      expect(divide(1, -1)).to.equal(-1);
    });

    it('should solve OJ test case 2', () => {
      expect(divide(-1, -1)).to.equal(1);
    });

    it('should solve OJ test case 3', () => {
      expect(divide(-1, 1)).to.equal(-1);
    });

  });
});
