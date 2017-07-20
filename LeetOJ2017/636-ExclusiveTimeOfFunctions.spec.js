import { expect } from 'chai';
import exclusiveTime from './636-ExclusiveTimeOfFunctions';

describe('LeetOJ 636-ExclusiveTimeOfFunctions', () => {
  describe('exclusiveTime', () => {
    it('should solve the given example', () => {
      const n = 2;
      const log = [
        "0:start:0",
        "1:start:2",
        "1:end:5",
        "0:end:6"
      ];
      const expected = 'Howdy, World';
      expect(exclusiveTime(n, log)).to.eql([3, 4]);
    });
  });
});
