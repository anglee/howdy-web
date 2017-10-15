import { expect } from 'chai';
import { words1, words2 } from './leetOJ-127_Word-Ladder.data';
import ladderLength from './leetOJ-127_Word-Ladder';

describe('leetOJ-127_Word-Ladder', () => {
  it('should work', () => {
    const begin = "sand";
    const end = "acne";
    const words = new Set(words1);

    expect(ladderLength(begin, end, words)).to.equal(11);
  });

  it('should work', () => {
    const begin = "nanny";
    const end = "aloud";
    const words = new Set(words2);
    expect(ladderLength(begin, end, words)).to.equal(20);
  });
});
