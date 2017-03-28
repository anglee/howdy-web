import { expect } from 'chai';
import lengthOfLongestSubstringKDistinct from './340-LongestSubstringWithAtMostKDistinctCharacters';

describe('lengthOfLongestSubstringKDistinct', () => {
  it('should solve the given example', () => {
    const s = 'eceba';
    const k = 2;
    expect(lengthOfLongestSubstringKDistinct(s, k)).to.equal(3);
  });
  it('should solve OJ test case 1', () => {
    const s = 'a';
    const k = 0;
    expect(lengthOfLongestSubstringKDistinct(s, k)).to.equal(0);
  });

  it('should solve OJ test case 2', () => {
    const s = 'aba';
    const k = 1;
    expect(lengthOfLongestSubstringKDistinct(s, k)).to.equal(1);
  });
});
