import { expect } from 'chai';
import twoRectsArea from './JumpTrading_RectsOverlap';

function Point(x, y) {
  this.x = x;
  this.y = y;
}
function Rect(x1, y1, x2, y2) {
  this.corner1 = new Point(x1, y1);
  this.corner2 = new Point(x2, y2); // corner1.x <= corner2.x, corner1.y <= corner2.y
}

describe('JumpTrading_RectsOverlap', () => {
  it('should calculate total when there is no overlap', () => {
    const r1 = new Rect(0, 0, 1, 1);
    const r2 = new Rect(2, 2, 3, 3);
    expect(twoRectsArea(r1, r2)).to.equal(2);
    expect(twoRectsArea(r2, r1)).to.equal(2);
  });
  it('should calculate total when there is overlap', () => {
    const r1 = new Rect(0, 0, 2, 2);
    const r2 = new Rect(1, 1, 3, 3);
    expect(twoRectsArea(r1, r2)).to.equal(7);
    expect(twoRectsArea(r2, r1)).to.equal(7);
  });
  it('should calculate total when there is overlap', () => {
    const r1 = new Rect(0, 0, 3, 3);
    const r2 = new Rect(1, 1, 2, 1);
    expect(twoRectsArea(r1, r2)).to.equal(9);
    expect(twoRectsArea(r2, r1)).to.equal(9);
  });
  it('should calculate total when there is overlap', () => {
    const r1 = new Rect(0, 0, 2, 3);
    const r2 = new Rect(1, 1, 3, 2);
    expect(twoRectsArea(r1, r2)).to.equal(7);
    expect(twoRectsArea(r2, r1)).to.equal(7);
  });
  it('should calculate total when there is overlap', () => {
    const r1 = new Rect(0, 0, 3, 2);
    const r2 = new Rect(1, 1, 2, 3);
    expect(twoRectsArea(r1, r2)).to.equal(7);
    expect(twoRectsArea(r2, r1)).to.equal(7);
  });
});
