import {expect} from 'chai';
import solution from './howdy';

describe('solution', () => {
  it('should say "Howdy, World!"', () => {
    expect(solution(9)).to.equal(2);
  });
  it('should say "Howdy, World!"', () => {
    expect(solution(1041)).to.equal(5);
  });
  it('should say "Howdy, World!"', () => {
    expect(solution(529)).to.equal(4);
  });
});
