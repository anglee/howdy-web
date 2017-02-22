import { expect } from 'chai';
import solution from './Codility_CyclicRotation';

describe('Codility_CyclicRotation', () => {
  it('should rotate array A, K times', () => {
    const A = [3, 8, 9, 7, 6];
    const K = 3;
    expect(solution(A, K)).to.eql([9, 7, 6, 3, 8]);
  });
});
