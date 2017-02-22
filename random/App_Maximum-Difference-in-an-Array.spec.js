import { expect } from 'chai';
import howdy from './App_Maximum-Difference-in-an-Array';

// Given an array of integers, a, return the maximum difference of any pair of numbers such that
// the larger integer in the pair occurs at a higher index (in the array) than the smaller integer.
// Return -1 if you cannot find a pair that satisfies this condition.
//  You are provided with a function maxDifference which takes in the array as a parameter. You are
// required to return an integer which is the right answer. The code for parsing the input and
// displaying the output is provided, so your only task is to complete the body of the provided
// function so it returns the correct output to the caller. However, for completeness, we describe
// the input format:

describe('App_Maximum-Difference-in-an-Array', () => {
  it('should find the max difference in an array', () => {
    const input = [2, 3, 10, 2, 4, 8, 1];
    const expected = 8;
    expect(howdy(input)).to.equal(expected);

    // For the array { 2,3,10,2,4,8,1} given above, 10 is the largest number in the array and
    // 1 is the smallest number in the array. However, the index of 10 is lower than the lowest
    // index that contains a 1 so the condition of the problem is not satisfied. Using zero-based
    // index notation, the correct answer is a[2] - a[0] = 10 - 2 = 8. This satisfies the condition
    // that the larger number in the pair should be positioned at a higher index in the array than
    // the smaller number.
  });

  it('should find the max difference in an array', () => {
    const input = [7, 9, 5, 6, 3, 2];
    const expected = 2;
    expect(howdy(input)).to.equal(expected);

    // The value of maxDifference is 9 - 7 = 2.
    // 9 occurs at a[1] and 7 occurs at a[0]. This satisfies the condition that the larger number
    // must have a higher index than the smaller number.
  });
});
