import {expect} from 'chai';
import howdy from './leet-35_Spiral-Matrix';

describe('leet-35_Spiral-Matrix', () => {
  it('should traverse a squre in viral order', () => {
    expect(howdy([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])).to.eql([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  it('should traverse a squre in viral order', () => {
    expect(howdy([
      [1]
    ])).to.eql([1]);
  });
  it('should traverse a squre in viral order', () => {
    expect(howdy([
      [1, 2],
      [3, 4]
    ])).to.eql([1, 2, 4, 3]);
  });
});
