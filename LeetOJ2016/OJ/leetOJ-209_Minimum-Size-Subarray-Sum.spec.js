import { expect } from 'chai';
import minSubArrayLen from './leetOJ-209_Minimum-Size-Subarray-Sum';

//Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.
//
//For example, given the array [2,3,1,2,4,3] and s = 7,
//  the subarray [4,3] has the minimal length under the problem constraint.

describe('leetOJ-209_Minimum-Size-Subarray-Sum', () => {
  it('should work with given example', () => {
    const input = [2,3,1,2,4,3];
    const s = 7;
    expect(minSubArrayLen(7, input)).to.equal(2);
  });
});
