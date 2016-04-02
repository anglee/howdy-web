import {expect} from 'chai';
import howdy from './howdy';

// on the phone pad
// 1 2 3
// 4 5 6
// 7 8 9
//   0

// assuming one can only move like the knight in chess
// given 2 numbers A, B on the phone pad, find a shortest path
// from A to B, if there is no path, return null;

describe('howdy', () => {
  it('should find the shortest path on the phone pad', () => {
    expect(howdy(1, 8)).to.eql([1, 8]);
  });
  it('should find the shortest path on the phone pad', () => {
    expect(howdy(1, 3)).to.eql([1, 8, 3]);
  });
  it('should find the shortest path on the phone pad', () => {
    expect(howdy(1, 0)).to.eql([1, 6, 0]);
  });
  it('should find the shortest path on the phone pad', () => {
    expect(howdy(1, 9).length).to.equal([1, 6, 7, 2, 9].length);
  });
  it('should return null if there is no path', () => {
    expect(howdy(1, 5)).to.be.null;
  });
});
