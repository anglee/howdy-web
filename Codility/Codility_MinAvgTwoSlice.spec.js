import { expect } from 'chai';
import solution from './Codility_MinAvgTwoSlice';

describe('Codility_MinAvgTwoSlice', () => {
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
