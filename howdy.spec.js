import {expect} from 'chai';
import solution from './howdy';

describe('solution', () => {
  it('should find the maximum sum of marked squares', () => {
    const A = [1, -2, 0, 9, -1, -2];
    expect(solution(A)).to.equal(8);
  });
  it('should find the maximum sum of marked squares', () => {
    const A = [1];
    expect(solution(A)).to.equal(1);
  });
  it('should find the maximum sum of marked squares', () => {
    const A = [1, 2, 3];
    expect(solution(A)).to.equal(6);
  });
  it('should find the maximum sum of marked squares', () => {
    const A = [1, -2, 3];
    expect(solution(A)).to.equal(4);
  });
});
