import { expect } from 'chai';
import canFinish from './207-CourseSchedule';

describe('LeetOJ 207-CourseSchedule', () => {
  describe('canFinish', () => {
    it('should solve the given example 1', () => {
      const numCourses = 2;
      const prerequisites = [[1, 0]];
      expect(canFinish(numCourses, prerequisites)).to.equal(true);
    });

    it('should solve the given example 2', () => {
      const numCourses = 2;
      const prerequisites = [[1, 0], [0, 1]];
      expect(canFinish(numCourses, prerequisites)).to.equal(false);
    });
  });
});
