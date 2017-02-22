import { expect } from 'chai';
import howdy from './leet-01_Two-Sum_Brute-force';

describe('leet-01_Two-Sum_Brute-force', () => {
  it('should find the 2 elements(indices) that add up to the sum given the array and the sum', () => {
    const array = [1,2,4,8,16];
    const sum = 6;
    const [index1, index2] = howdy(array, sum);
    expect(index1).to.equal(1);
    expect(index2).to.equal(2);
  });
  it('should find the 2 elements(indices) that add up to the sum given the array and the sum', () => {
    const array = [1, 2, 4, 8, 16];
    const sum = 10;
    const [index1, index2] = howdy(array, sum);
    expect(index1).to.equal(1);
    expect(index2).to.equal(3);
  });
});
