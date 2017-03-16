import _ from 'lodash';
import { expect } from 'chai';
import maximalRectangle from './085-MaximalRectangle';


describe('LeetOJ 085-MaximalRectangle', () => {
  describe('maximalRectangle', () => {
    it('should solve the given example', () => {
      const heights = [
        [1, 0, 1, 0, 0].map(_.toString),
        [1, 0, 1, 1, 1].map(_.toString),
        [1, 1, 1, 1, 1].map(_.toString),
        [1, 0, 0, 1, 0].map(_.toString),
      ];
      expect(maximalRectangle(heights)).to.equal(6);
    });
    it('should solve test case 1', () => {
      const heights = [
        [1, 1, 1, 0, 0].map(_.toString),
        [1, 1, 1, 1, 1].map(_.toString),
        [1, 1, 1, 1, 1].map(_.toString),
        [1, 0, 0, 1, 0].map(_.toString),
      ];
      expect(maximalRectangle(heights)).to.equal(10);
    });
    it('should solve test case 2', () => {
      const heights = [
        [1, 1, 1, 0, 0].map(_.toString),
        [1, 1, 1, 0, 1].map(_.toString),
        [1, 1, 1, 1, 1].map(_.toString),
        [1, 0, 0, 1, 0].map(_.toString),
      ];
      expect(maximalRectangle(heights)).to.equal(9);
    });
    it('should solve empty test', () => {
      const heights = [
        [1, 1, 1, 0, 0].map(_.toString),
        [1, 1, 1, 0, 1].map(_.toString),
        [1, 1, 1, 1, 1].map(_.toString),
        [1, 0, 0, 1, 0].map(_.toString),
      ];
      expect(maximalRectangle(heights)).to.equal(9);
    });
  });
});
