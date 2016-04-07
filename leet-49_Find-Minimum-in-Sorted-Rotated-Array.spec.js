import {expect} from 'chai';
import howdy from './leet-49_Find-Minimum-in-Sorted-Rotated-Array';

describe('leet-49_Find-Minimum-in-Sorted-Rotated-Array', () => {
  it('should find the minimum in a sorted array', () => {
    const sortedArray = [3, 4, 5, 0, 1, 2];
    expect(howdy(sortedArray)).to.equal(0);
  });

  it('should find the minimum in a sorted array', () => {
    const sortedArray = [1, 2];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array', () => {
    const sortedArray = [3, 1];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array', () => {
    const sortedArray = [1, 2, 3];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array', () => {
    const sortedArray = [2, 3, 1];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array', () => {
    const sortedArray = [3, 1, 2];
    expect(howdy(sortedArray)).to.equal(1);
  });
});
