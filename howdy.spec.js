import {expect} from 'chai';
import {bruteForceSolution, solution} from './howdy';

describe('bruteForceSolution', () => {
  it('should find how many triangles can be formed, given sorted A', () => {
    const A = [2,3,4,5];
    // 3 triangles can be formed with edges selected from A:
    // [2,3,4], [2,4,5], [3,4,5]
    expect(bruteForceSolution(A)).to.equal(3);
  });
});

// the instruction in the pdf was weird, my solution is essentially the same as
// the given solution, which it claims to be O(n^2), but I think it should be O(n^3) instead
// not sure if there is a O(n^2) solution.
