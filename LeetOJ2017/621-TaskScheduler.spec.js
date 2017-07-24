import { expect } from 'chai';
import leastInterval from './621-TaskScheduler';

describe('LeetOJ 621-TaskScheduler', () => {
  describe('leastInterval', () => {
    it('should solve the given example', () => {
      const tasks = ['A', 'A', 'A', 'B', 'B', 'B'];
      const n = 2;
      expect(leastInterval(tasks, n)).to.equal(8);
    });

    it('should solve test case 1', () => {
      const tasks = ['A', 'B', 'C', 'A', 'C', 'B', 'A', 'A'];
      const n = 2;
      expect(leastInterval(tasks, n)).to.equal(10);
    });
    it('should solve test case 2', () => {
      const tasks = [
        'A', 'A', 'A', 'A',
        'B', 'B', 'C', 'C',
        'D', 'D', 'D', 'D'
      ];
      const n = 3;
      expect(leastInterval(tasks, n)).to.equal(14);
    });
    it('should solve test case 3', () => {
      const tasks = [
        'A', 'A', 'A',
        'B', 'C', 'D', 'E'
      ];
      const n = 2;
      expect(leastInterval(tasks, n)).to.equal(7);
    });
  });
});
