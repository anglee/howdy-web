import {expect} from 'chai';
import tieRopes from './howdy';

describe('howdy', () => {
  it('should return the maximum number of ropes of length greater than or equal to K that can be created', () => {
    const K = 4;
    const A = [1, 2, 3, 4, 1, 1, 3];
    expect(tieRopes(K, A)).to.equal(3);
  });
});
