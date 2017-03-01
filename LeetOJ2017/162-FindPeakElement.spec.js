import _ from 'lodash';
import { expect } from 'chai';
import solution from './162-FindPeakElement';

describe('LeetOJ 162-FindPeakElement', () => {
  describe('solution', () => {
    it('should solve the given example', () => {
      const input = [1, 2, 3, 1];
      const expected = input.indexOf(3);
      expect(solution(input)).to.equal(expected);
    });

    it('should solve test case 1', () => {
      const input = [1, 2, 3, 2, 1, 2];
      const expected = input.indexOf(3);
      expect(solution(input)).to.equal(expected);
    });

    it('should solve test case 2', () => {
      const input = [1, 2, 3, 4, 5];
      const expected = input.indexOf(5);
      expect(solution(input)).to.equal(expected);
    });

    it('should solve test case 3', () => {
      const input = [5, 4, 3, 2, 1];
      const expected = input.indexOf(5);
      expect(solution(input)).to.equal(expected);
    });

    it('should solve base case [1]', () => {
      const input = [1];
      const expected = input.indexOf(1);
      expect(solution(input)).to.equal(expected);
    });

    it('should solve base case [1,2]', () => {
      const input = [1, 2];
      const expected = input.indexOf(2);
      expect(solution(input)).to.equal(expected);
    });

    it('should solve base case [2,1]', () => {
      const input = [2, 1];
      const expected = input.indexOf(2);
      expect(solution(input)).to.equal(expected);
    });

    it('should solve base case [1,2,3]', () => {
      const input = [1, 2, 3];
      const expected = input.indexOf(3);
      expect(solution(input)).to.equal(expected);
    });
    it('should solve base case [3,2,1]', () => {
      const input = [3, 2, 1];
      const expected = input.indexOf(3);
      expect(solution(input)).to.equal(expected);
    });
    it('should solve base case [3,1,2]', () => {
      const input = [3, 1, 2];
      const expected = input.indexOf(3);
      const actual = solution(input);
      expect(
        _.isEqual(actual, input.indexOf(3)) ||
        _.isEqual(actual, input.indexOf(2))
      ).to.be.true;
    });
  });
});
