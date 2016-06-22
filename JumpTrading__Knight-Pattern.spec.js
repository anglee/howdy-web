import {expect} from 'chai';
import howdy from './JumpTrading__Knight-Pattern';

describe('JumpTrading__Knight-Pattern', () => {
  it('should say "Howdy, World!"', () => {
    const A = 4;
    const B = 5;
    expect(howdy(A, B)).to.equal(3);
  });
  it('should say "Howdy, World!"', () => {
    const A = 2;
    const B = 1;
    expect(howdy(A, B)).to.equal(1);
  });
  it('should say "Howdy, World!"', () => {
    const A = 3;
    const B = 3;
    expect(howdy(A, B)).to.equal(2);
  });
  it('should say "Howdy, World!"', () => {
    const A = -1;
    const B = -2;
    expect(howdy(A, B)).to.equal(1);
  });
  it('should say "Howdy, World!"', () => {
    const A = -3;
    const B = -3;
    expect(howdy(A, B)).to.equal(2);
  });
  it('should say "Howdy, World!"', () => {
    const A = -4;
    const B = -5;
    expect(howdy(A, B)).to.equal(3);
  });
  it('should say "Howdy, World!"', () => {
    const A = -5;
    const B = 4;
    expect(howdy(A, B)).to.equal(3);
  });
  it('should say "Howdy, World!"', () => {
    const A = 0;
    const B = 1;
    expect(howdy(A, B)).to.equal(3);
  });
  it('should say "Howdy, World!"', () => {
    const A = 0;
    const B = 2;
    expect(howdy(A, B)).to.equal(2);
  });
});
