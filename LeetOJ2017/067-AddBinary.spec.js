import { expect } from "chai";
import addBinary from "./067-AddBinary";

describe('LeetOJ 067-AddBinary', () => {
  describe('addBinary', () => {
    it('should work with given example', () => {
      const a = '11';
      const b = '1';
      const expected = '100';
      expect(addBinary(a, b)).to.equal(expected);
    });
  });
});
