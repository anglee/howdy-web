import {expect} from 'chai';
import howdy from './EPI_17.4_PathCountIn2DArray';

describe('EPI_17.4_PathCountIn2DArray', () => {
  it('should find count of possible paths in a nxm array', () => {
    expect(howdy(2, 2)).to.equal(2);
  });
  it('should find count of possible paths in a nxm array', () => {
    expect(howdy(3, 3)).to.equal(6);
  });
  it('should find count of possible paths in a nxm array', () => {
    expect(howdy(3, 4)).to.equal(10);
  });
});
