import {expect} from 'chai';
import solve from './howdy';

describe('solve', () => {
  it('should solve the given example', () => {
    const input = null;
    const expected = 'Howdy, World!';
    expect(solve(input)).to.equal(expected);
  });
});
