import {expect} from 'chai';
import howdy from './Codility_CountDistinctSlices';

describe('Codility_CountDistinctSlices', () => {
  it('should find number of distinct slices', () => {
    const A = [3, 4, 5, 5, 2];
    const M = 6; // All integers in array A are less than or equal to M
    expect(howdy(A, M)).to.equal(9);
  });
  it('should find number of distinct slices', () => {
    const A = [1];
    const M = 1; // All integers in array A are less than or equal to M
    expect(howdy(A, M)).to.equal(1);
  });
  it('should find number of distinct slices', () => {
    const A = [1, 2];
    const M = 2; // All integers in array A are less than or equal to M
    expect(howdy(A, M)).to.equal(3);
  });
  it('should find number of distinct slices', () => {
    const A = [1, 1];
    const M = 1; // All integers in array A are less than or equal to M
    expect(howdy(A, M)).to.equal(2);
  });
  it('should find number of distinct slices', () => {
    const A = [1, 2, 1];
    const M = 2; // All integers in array A are less than or equal to M
    expect(howdy(A, M)).to.equal(5);
  });
});
