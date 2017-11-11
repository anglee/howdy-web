import { expect } from 'chai';
import reconstructQueue from './406-QueueReconstructionByHeight';

describe('LeetOJ 406-QueueReconstructionByHeight', () => {
  describe('reconstructQueue', () => {
    it('should solve the given example', () => {
      const input = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
      const expected = [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]];
      expect(reconstructQueue(input)).to.eql(expected);
    });
  });
});
