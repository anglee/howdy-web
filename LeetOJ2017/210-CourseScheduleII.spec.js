import {expect} from 'chai';
import findOrder from './210-CourseScheduleII';


describe('LeetOJ 210-CourseScheduleII', () => {

  describe('findOrder', () => {
    it('should solve the given example 1', () => {
      const numCourses = 2;
      const prerequisites = [[1, 0]];
      expect(findOrder(numCourses, prerequisites)).to.eql([0, 1]);
    });

    it('should solve the given example 2', () => {
      const numCourses = 4;
      const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];
      const order = findOrder(numCourses, prerequisites);
      expect(order.length).to.equal(numCourses);
      const indices = new Map();
      order.forEach((node, i) => {
        indices.set(node, i);
      });
      prerequisites.forEach(([to, from]) => {
        expect(indices.get(from)).to.be.below(indices.get(to));
      });
    });

    it('should solve test case', () => {
      const numCourses = 1;
      const prerequisites = [];
      const order = findOrder(numCourses, prerequisites);
      expect(order).to.eql([0]);
    });

  });
});
