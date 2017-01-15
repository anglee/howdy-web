import {expect} from 'chai';
import howdy from './leet-45_Max-Sum-Subarray';

describe('leet-45_Max-Sum-Subarray', () => {
  it('should find the max sum of subarrays(continuous)', () => {
    const A = [2, 1, -3, 4, -1, 2, 1, -5, 4];
    expect(howdy(A)).to.equal(6); // sum of subarray [4, -1, 2, 1]
  });
  it('should find the max sum of subarrays(continuous)', () => {
    const A = [1];
    expect(howdy(A)).to.equal(1);
  });
  it('should find the max sum of subarrays(continuous)', () => {
    const A = [1, 2];
    expect(howdy(A)).to.equal(3);
  });
  it('should find the max sum of subarrays(continuous)', () => {
    const A = [1, -2];
    expect(howdy(A)).to.equal(1);
  });
  it('should find the max sum of subarrays(continuous)', () => {
    const A = [-1, 2];
    expect(howdy(A)).to.equal(2);
  });
  it('should find the max sum of subarrays(continuous)', () => {
    const A = [-1, -2];
    expect(howdy(A)).to.equal(-1);
  });
  it('should find the max sum of subarrays(continuous)', () => {
    const A = [1, 2, 3, 4];
    expect(howdy(A)).to.equal(10);
  });
  it('should find the max sum of subarrays(continuous)', () => {
    const A = [-1, -2, -3];
    expect(howdy(A)).to.equal(-1);
  });
});
