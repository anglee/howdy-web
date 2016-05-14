import {expect} from 'chai';
import spiralOrder from './leetOJ-054_Spiral-Matrix';

describe('leetOJ-054_Spiral-Matrix', () => {
  it('should work with empty', () => {
    const M = [];
    expect(spiralOrder(M)).to.deep.equal([]);
  });
  it('should work with h = 1', () => {
    const M = [[1, 2, 3]];
    expect(spiralOrder(M)).to.deep.equal([1,2,3]);
  });
  it('should work with w = 1', () => {
    const M = [[1], [2], [3]];
    expect(spiralOrder(M)).to.deep.equal([1,2,3]);
  });
  it('should work with w = 1 && h = 1', () => {
    const M = [[1]];
    expect(spiralOrder(M)).to.deep.equal([1]);
  });
  it('should work with tall rectangle', () => {
    const M = [
      [1, 2, 3],
      [0, 1, 4],
      [9, 2, 5],
      [8, 7, 6]
    ];
    expect(spiralOrder(M))
      .to.deep.equal([1,2,3,4,5,6,7,8,9,0,1,2]);
  });
  it('should work with flat rectangle', () => {
    const M = [
      [1, 2, 3, 4],
      [0, 1, 2, 5],
      [9, 8, 7, 6]
    ];
    expect(spiralOrder(M))
      .to.deep.equal([1,2,3,4,5,6,7,8,9,0,1,2]);
  });
  it('should work with square, w = odd', () => {
    const M = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ];
    expect(spiralOrder(M))
      .to.deep.equal([1,2,3,4,5,6,7,8,9]);
  });
  it('should work with square, w = even', () => {
    const M = [
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [1, 6, 5, 6],
      [0, 9, 8, 7]
    ];
    expect(spiralOrder(M))
      .to.deep.equal([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6]);
  });
});
