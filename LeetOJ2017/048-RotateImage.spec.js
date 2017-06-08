import _ from 'lodash';
import { expect } from 'chai';
import rotate from './048-RotateImage';

describe('LeetOJ 048-RotateImage', () => {
  describe('rotate', () => {
    it('should solve test case 1', () => {
      const input = [[1]];
      const expected = [[1]];
      rotate(input);
      expect(_.flatten(input)).to.eql(_.flatten(expected));
    });
    it('should solve test case 2', () => {
      const input = [
        [1, 2],
        [3, 4],
      ];
      const expected = [
        [3, 1],
        [4, 2],
      ];
      rotate(input);
      expect(_.flatten(input)).to.eql(_.flatten(expected));
    });
    it('should solve test case 3', () => {
      const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const expected = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ];
      rotate(input);
      expect(_.flatten(input)).to.eql(_.flatten(expected));
    });
    it('should solve test case 4', () => {
      const input = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ];
      const expected = [
        [13, 9, 5, 1],
        [14, 10, 6, 2],
        [15, 11, 7, 3],
        [16, 12, 8, 4],
      ];
      rotate(input);
      expect(_.flatten(input)).to.eql(_.flatten(expected));
    });
  });
});
