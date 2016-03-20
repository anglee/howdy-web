import {expect} from 'chai';
import howdy from './howdy';

describe('howdy', () => {
  it('should compress strings', () => {
    const input = "aabcccccaaa";
    const expected = "a2b1c5a3";
    expect(howdy(input)).to.equal(expected);
  });
  it('should should return the original string if ther compressed result is not shorter', () => {
    const input = "abc";
    const wrongResult = "a1b1c1";
    const expected = "abc";
    expect(howdy(input)).to.equal(expected);
    expect(howdy(input)).to.not.equal(wrongResult);
  });
});
