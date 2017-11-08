import { expect } from 'chai';
import killProcess from './582-KillProcess';

describe('LeetOJ 582-KillProcess', () => {
  describe('killProcess', () => {
    it('should solve the given example', () => {
      const pid = [1, 3, 10, 5];
      const ppid = [3, 0, 5, 3];
      const kill = 5;
      expect(killProcess(pid, ppid, kill)).to.have.all.members([5, 10]);
    });
  });
});
