import {expect} from 'chai';
import howdy from './howdy';

describe('howdy', () => {
  it('should count triangles', () => {
    const A = [10, 2, 5, 1, 8, 12]; // sorted -> [1, 2, 5, 8, 10, 12]
    expect(howdy(A)).to.equal(4);
  });
});
