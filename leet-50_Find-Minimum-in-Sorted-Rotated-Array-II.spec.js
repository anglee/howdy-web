import {expect} from 'chai';
import howdy from './leet-50_Find-Minimum-in-Sorted-Rotated-Array-II';

describe('leet-50_Find-Minimum-in-Sorted-Rotated-Array-II', () => {
  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [3, 4, 5, 0, 1, 2];
    expect(howdy(sortedArray)).to.equal(0);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [1];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [1, 1];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [1, 2];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [3, 1];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [1, 2, 3];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [2, 3, 1];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [3, 1, 2];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [1, 2, 2];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [2, 1, 2];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [2, 2, 1];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [1, 1, 2];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [2, 1, 1];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [1, 2, 1];
    expect(howdy(sortedArray)).to.equal(1);
  });

  it('should find the minimum in a sorted array that could contain duplicates', () => {
    const sortedArray = [1, 1, 1];
    expect(howdy(sortedArray)).to.equal(1);
  });
});
