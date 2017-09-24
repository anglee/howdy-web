import _ from 'lodash';
import { expect } from 'chai';
import depthSumInverse from './364-NestedListWeightSumII';

const createNestedInteger = (input) => {
  if (_.isArray(input)) {
    return {
      isInteger: () => false,
      getList: () => input.map(createNestedInteger)
    };
  } else { // is integer
    return {
      isInteger: () => true,
      getInteger: () => input
    };
  }
};


describe('LeetOJ 364-NestedListWeightSumII', () => {
  describe('depthSumInverse', () => {
    it('should solve the given example 1', () => {
      const input = createNestedInteger([[1, 1], 2, [1, 1]]).getList();
      const expected = 8;
      expect(depthSumInverse(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = createNestedInteger([1, [4, [6]]]).getList();
      const expected = 17;
      expect(depthSumInverse(input)).to.equal(expected);
    });
  });
});
