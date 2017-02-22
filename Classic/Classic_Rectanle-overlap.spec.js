import { expect } from 'chai';
import howdy from './Classic_Rectanle-overlap';

describe('Classic_Rectanle-overlap', () => {
  it('should determine if 2 rectangles overlap', () => {
    const r1 = {
      left: 0,
      right: 5,
      top: 5,
      bottom: 0
    };
    const r2 = {
      left: 10,
      right: 15,
      top: 5,
      bottom: 0
    };
    expect(howdy(r1, r2)).to.equal(false);
  });
  it('should determine if 2 rectangles overlap', () => {
    const r1 = {
      left: 0,
      right: 5,
      top: 5,
      bottom: 0
    };
    const r2 = {
      left: 1,
      right: 4,
      top: 4,
      bottom: 1
    };
    expect(howdy(r1, r2)).to.equal(true);
  });
  it('should determine if 2 rectangles overlap', () => {
    const r1 = {
      left: 0,
      right: 5,
      top: 5,
      bottom: 0
    };
    const r2 = {
      left: 3,
      right: 8,
      top: 8,
      bottom: 3
    };
    expect(howdy(r1, r2)).to.equal(true);
  });
  it('should determine if 2 rectangles overlap', () => {
    const r1 = {
      left: 0,
      right: 10,
      top: 6,
      bottom: 4
    };
    const r2 = {
      left: 4,
      right: 6,
      top: 10,
      bottom: 0
    };
    expect(howdy(r1, r2)).to.equal(true);
  });
});
