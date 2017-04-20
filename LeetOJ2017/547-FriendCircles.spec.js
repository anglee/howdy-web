import { expect } from 'chai';
import findCircleNum from './547-FriendCircles';

describe('LeetOJ 547-FriendCircles', () => {
  describe('findCircleNum', () => {
    it('should solve the given example 1', () => {
      const input = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ];
      const expected = 2;
      expect(findCircleNum(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
      ];
      const expected = 1;
      expect(findCircleNum(input)).to.equal(expected);
    });
  });
});
