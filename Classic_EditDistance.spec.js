import {expect} from 'chai';
import ed from './Classic_EditDistance';

describe('Classic_EditDistance', () => {
  it('should calculate edit distance', () => {
    const s1 = 'geek';
    const s2 = 'geek';
    expect(ed(s1, s2)).to.equal(0);
  });
  it('should calculate edit distance', () => {
    const s1 = 'geek';
    const s2 = 'gesek';
    expect(ed(s1, s2)).to.equal(1);
  });
  it('should calculate edit distance', () => {
    const s1 = 'gesek';
    const s2 = 'geek';
    expect(ed(s1, s2)).to.equal(1);
  });
  it('should calculate edit distance', () => {
    const s1 = 'gesek';
    const s2 = 'geaek';
    expect(ed(s1, s2)).to.equal(1);
  });
});
