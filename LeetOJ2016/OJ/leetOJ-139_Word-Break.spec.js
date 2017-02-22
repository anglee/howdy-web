import { expect } from 'chai';
import wordBreak from './leetOJ-139_Word-Break';

describe('leetOJ-139_Word-Break', () => {
  const s = 'leetcode';
  const wordDict = new Set(['leet', 'code']);

  it('should work', () => {
    expect(wordBreak(s, wordDict)).to.be.true;
  });
});
