import {expect} from 'chai';
import solution from './howdy';

describe('solution', () => {
  it('should solve the given example', () => {
    const input = null;
    const expected = 'Howdy, World!';
    expect(solution(input)).to.equal(expected);
  });
});
