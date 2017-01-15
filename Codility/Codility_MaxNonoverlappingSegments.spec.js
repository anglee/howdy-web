import {expect} from 'chai';
import solution from './Codility_MaxNonoverlappingSegments';

describe('Codility_MaxNonoverlappingSegments', () => {
  it('should find the max count of non-overlapping segments', () => {
    const A = [1, 3, 7, 9, 9]; // segment begins
    const B = [5, 6, 8, 9, 10]; // segment ends

    // segments are sorted by end points (ie. B is sorted)

    expect(solution(A, B)).to.equal(3);
  });
});

//https://codesays.com/2015/solution-to-max-nonoverlapping-segments-by-codility/
