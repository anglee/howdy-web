import {expect} from 'chai';
import solution from './howdy';

describe('solution', () => {
  it('should work', () => {
    const A = [4, 2, 2, 5, 1, 5, 8];
    expect(solution(A)).to.equal(1);
  });

  it('should work', () => {
    const A = [1,2,3];
    expect(solution(A)).to.equal(0);
  });

  it('should work', () => {
    const A = [3,1,2];
    expect(solution(A)).to.equal(1);
  });

  it('should work', () => {
    const A = [3,2,1];
    expect(solution(A)).to.equal(1);
  });

  it('should work', () => {
    const A = [2,5,1];
    expect(solution(A)).to.equal(0);
  });

  it('should work', () => {
    const A = [7, 1, 6];
    expect(solution(A)).to.equal(1);
  });

  it('should work', () => {
    const A = [7, 1, 8];
    expect(solution(A)).to.equal(0);
  });

  it('should work', () => {
    const A = [2, 2, 2];
    expect(solution(A)).to.equal(0);
  });

  it('should work', () => {
    const A = [2, 2, 3];
    expect(solution(A)).to.equal(0);
  });

  it('should work', () => {
    const A = [2, 2, 1];
    expect(solution(A)).to.equal(1);
  });
});


// https://codesays.com/2014/solution-to-min-avg-two-slice-by-codility/
//The key to solve this task is these two patterns:
//  (1) There must be some slices, with length of two or three, having the
//      minimal average value among all the slices.
//  (2) And all the longer slices with minimal average are built up with
//      these 2-element and/or 3-element small slices.
