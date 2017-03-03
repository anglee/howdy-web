import { expect } from 'chai';
import Vector2D from './251-Flatten2DVector';

describe('LeetOJ 251-Flatten2DVector', () => {
  describe('Vector2D', () => {
    it('should solve the given example', () => {
      const input = [
        [1, 2],
        [3],
        [4, 5, 6]
      ];
      const expected = [1, 2, 3, 4, 5, 6];

      const v = new Vector2D(input);
      const A = [];
      while (v.hasNext()) {
        A.push(v.next());
      }
      expect(A).to.eql(expected);
    });

    it('should solve test case where 1st element is empty', () => {
      const input = [[], [1]];
      const expected = [1];

      const v = new Vector2D(input);
      const A = [];
      while (v.hasNext()) {
        A.push(v.next());
      }
      expect(A).to.eql(expected);
    });

  });
});
