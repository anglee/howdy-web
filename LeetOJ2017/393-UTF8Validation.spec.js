import { expect } from 'chai';
import validUtf8 from './393-UTF8Validation';

describe('LeetOJ 393-UTF8Validation', () => {
  describe('validUtf8', () => {
    it('should solve the given example 1', () => {
      const input = [197, 130, 1];
      const expected = true;
      expect(validUtf8(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = [235, 140, 4];
      const expected = false;
      expect(validUtf8(input)).to.equal(expected);
    });
    it('should solve the OJ test case 1', () => {
      const input = [248, 130, 130, 130];
      const expected = false;
      expect(validUtf8(input)).to.equal(expected);
    });
  });
});
