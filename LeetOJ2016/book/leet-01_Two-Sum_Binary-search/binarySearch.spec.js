import _ from 'lodash';
import { expect } from 'chai';
import binarySearch from './binarySearch';

describe('leet-01_Two-Sum_Binary-search_binarySearch', () => {
  describe('general test', () => {
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

  describe('when input array is empty', () => {
    it('should always return -1', () => {
      const sortedArray = [];
      const target = 7;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(-1);
    });
  });

  describe('when input array is of length 1', () => {
    const sortedArray = [5];
    it('should return -1 if target is not found', () => {
      const target = 1;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(-1);
    });
    it('should return -1 if target is not found', () => {
      const target = 7;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(-1);
    });
    it('should return the index (0) if target is found', () => {
      const target = 5;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(0);
    });
  });

  describe('when input array is of length 2', () => {
    const sortedArray = [10,100];
    it('should return -1 if target is not found', () => {
      const target = 1;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(-1);
    });
    it('should return -1 if target is not found', () => {
      const target = 50;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(-1);
    });
    it('should return -1 if target is not found', () => {
      const target = 200;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(-1);
    });
    it('should return the index if target is found', () => {
      const target = 10;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(0);
    });
    it('should return the index if target is found', () => {
      const target = 100;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(1);
    });
  });

  describe('when input array is of length 3', () => {
    const sortedArray = [10, 100, 1000];
    it('should return -1 if target is not found', () => {
      const target = 1;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(-1);
    });
    it('should return -1 if target is not found', () => {
      const target = 50;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(-1);
    });
    it('should return -1 if target is not found', () => {
      const target = 200;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(-1);
    });
    it('should return -1 if target is not found', () => {
      const target = 2000;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(-1);
    });
    it('should return the index if target is found', () => {
      const target = 10;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(0);
    });
    it('should return the index if target is found', () => {
      const target = 100;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(1);
    });
    it('should return the index if target is found', () => {
      const target = 1000;
      const index = binarySearch(sortedArray, target);
      expect(index).to.equal(2);
    });
  });

});
