import _ from 'lodash';
import {expect} from 'chai';
import howdy from './leet-01_Two-Sum_Hash-table';

describe('leet-01_Two-Sum_Hash-table', () => {
  describe('should find the 2 elements(indices) that add up to the sum', () => {
    it('given the array and the sum ', () => {
      const array = [1, 4, 16, 2, 8];
      const sum = 6;
      const [index1, index2] = howdy(array, sum);
      expect(index1).to.equal(1);
      expect(index2).to.equal(3);
    });

    it('given the array(sorted) and the sum', () => {
      const array = [1, 2, 4, 8, 16];
      const sum = 17;
      const [index1, index2] = howdy(array, sum);
      expect(index1).to.equal(0);
      expect(index2).to.equal(4);
    });
  });
});
