import { expect } from 'chai';
import singleNumber from './136-SingleNumber';

describe('singleNumber', () => {
  it('should solve the given example', () => {
    const input = [1,2,1,2,4];
    const expected = 4;
    expect(singleNumber(input)).to.equal(expected);
  });
});
