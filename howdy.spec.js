import {expect} from 'chai';
import {catepillar} from './howdy';

describe('catepillar', () => {
  it('should find the sequence in the input array A that sums to s', () => {
    const A = [6, 2, 7, 4, 1, 3, 6];
    const s = 12;
    expect(catepillar(A, s)).to.eql([7, 4, 1]);
  });
});
