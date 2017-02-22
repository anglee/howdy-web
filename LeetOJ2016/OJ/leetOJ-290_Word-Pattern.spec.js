import { expect } from 'chai';
import wordPattern from './leetOJ-290_Word-Pattern';

describe('leetOJ-290_Word-Pattern', () => {

  it('should work', () => {
    const pattern = 'abba';
    const str = 'dog cat cat dog';
    expect(wordPattern(pattern, str)).to.be.true;
  });

  it('should work', () => {
    const pattern = 'abba';
    const str = 'dog cat cat fish';
    expect(wordPattern(pattern, str)).to.be.false;
  });


  it('should work', () => {
    const pattern = 'aaaa';
    const str = 'dog cat cat dog';
    expect(wordPattern(pattern, str)).to.be.false;
  });

  it('should work', () => {
    const pattern = 'abba';
    const str = 'dog dog dog dog';
    expect(wordPattern(pattern, str)).to.be.false;
  });

  it('should work', () => {
    const pattern = 'ab';
    const str = 'b c';
    expect(wordPattern(pattern, str)).to.be.true;
  });
});
