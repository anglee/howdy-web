import { expect } from 'chai';
import majorityElement from './169-MajorityElement';

describe('LeetOJ 169-MajorityElement', () => {
  describe('majorityElement', () => {
    it('should solve test case [1]', () => {
      const input = [1];
      const expected = 1;
      expect(majorityElement(input)).to.equal(expected);
    });
    it('should solve test case [1,1]', () => {
      const input = [1, 1];
      const expected = 1;
      expect(majorityElement(input)).to.equal(expected);
    });

    it('should solve test case [1,1,1]', () => {
      const input = [1, 1, 1];
      const expected = 1;
      expect(majorityElement(input)).to.equal(expected);
    });

    it('should solve test case [1,1,2]', () => {
      const input = [1, 1, 2];
      const expected = 1;
      expect(majorityElement(input)).to.equal(expected);
    });
    it('should solve test case [1,2,1]', () => {
      const input = [1, 2, 1];
      const expected = 1;
      expect(majorityElement(input)).to.equal(expected);
    });

    it('should solve test case [1,1,1,1]', () => {
      const input = [1, 1, 1, 1];
      const expected = 1;
      expect(majorityElement(input)).to.equal(expected);
    });
    it('should solve test case [1,1,1,2]', () => {
      const input = [1, 1, 1, 2];
      const expected = 1;
      expect(majorityElement(input)).to.equal(expected);
    });
    it('should solve test case [2,1,1,1]', () => {
      const input = [2, 1, 1, 1];
      const expected = 1;
      expect(majorityElement(input)).to.equal(expected);
    });

    it('should solve test case [1,1,1,2,2]', () => {
      const input = [1, 1, 1, 2, 2];
      const expected = 1;
      expect(majorityElement(input)).to.equal(expected);
    });
    it('should solve test case [1,1,2,2,1]', () => {
      const input = [1, 1, 2, 2, 1];
      const expected = 1;
      expect(majorityElement(input)).to.equal(expected);
    });
    it('should solve test case [1,2,1,2,1]', () => {
      const input = [1, 2, 1, 2, 1];
      const expected = 1;
      expect(majorityElement(input)).to.equal(expected);
    });

    it('should solve test case [1,1,2,2,1,1]', () => {
      const input = [1, 1, 2, 2, 1, 1];
      const expected = 1;
      expect(majorityElement(input)).to.equal(expected);
    });
  });
});
