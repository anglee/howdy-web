import _ from 'lodash';
import { expect } from 'chai';
import depthSum from './339-NestedListWeightSum';

describe('LeetOJ 339-NestedListWeightSum', () => {
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


  describe('depthSum', () => {
    it('should solve the given example 1', () => {
      const input = createNestedInteger([[1, 1], 2, [1, 1]]).getList();
      const expected = 10;
      expect(depthSum(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = createNestedInteger([1, [4, [6]]]).getList();
      const expected = 27;
      expect(depthSum(input)).to.equal(expected);
    });
  });
});
