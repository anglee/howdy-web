import _ from 'lodash';
import {expect} from 'chai';
import binarySearch from './binarySearch';

describe('leet-01_Two-Sum_Binary-search_binarySearch', () => {
  const sortedArray = [1, 2, 4, 8, 16];
  it('should find the index of target in the given sorted array', () => {
    const target = 8;
    const index = binarySearch(sortedArray, target);
    expect(index).to.equal(3);
  });
  it('should find the index of target in the given sorted array', () => {
    const target = 1;
    const index = binarySearch(sortedArray, target);
    expect(index).to.equal(0);
  });
  it('should find the index of target in the given sorted array', () => {
    const target = 16;
    const index = binarySearch(sortedArray, target);
    expect(index).to.equal(4);
  });
  it('should return -1 if target was not found in the given sorted array', () => {
    const target = 7;
    const index = binarySearch(sortedArray, target);
    expect(index).to.equal(-1);
  });
});
