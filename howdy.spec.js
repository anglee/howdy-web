import _ from 'lodash';
import {expect} from 'chai';
import howdy from './howdy';

describe('howdy', () => {
  describe('should find the 2 elements(indices) that add up to the sum', () => {
    it('given the sorted array and the sum ', () => {
      const sortedArray = [1, 2, 4, 8, 16];
      const sum = 3;
      const [index1, index2] = howdy(sortedArray, sum);
      expect([index1, index2]).to.deep.equal([0, 1]);
    });
  });
});
