import { expect } from 'chai';
import topKFrequent from './692-TopKFrequentWords';

describe('LeetOJ 692-TopKFrequentWords', () => {
  describe('topKFrequent', () => {
    it('should solve the given example 1', () => {
      const words = ["i", "love", "leetcode", "i", "love", "coding"];
      const k = 2;
      const expected = ["i", "love"];
      expect(topKFrequent(words, k)).to.eql(expected);
    });
    it('should solve the given example 2', () => {
      const words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"];
      const k = 4;
      const expected = ["the", "is", "sunny", "day"];
      expect(topKFrequent(words, k)).to.eql(expected);
    });
    it('should solve OJ test case 1', () => {
      const words = ["i", "love", "leetcode", "i", "love", "coding"];
      const k = 1;
      const expected = ["i"];
      expect(topKFrequent(words, k)).to.eql(expected);
    });
    it('should solve OJ test case 2', () => {
      const words = ["glarko", "zlfiwwb", "nsfspyox", "pwqvwmlgri", "qggx", "qrkgmliewc", "zskaqzwo", "zskaqzwo", "ijy", "htpvnmozay", "jqrlad", "ccjel", "qrkgmliewc", "qkjzgws", "fqizrrnmif", "jqrlad", "nbuorw", "qrkgmliewc", "htpvnmozay", "nftk", "glarko", "hdemkfr", "axyak", "hdemkfr", "nsfspyox", "nsfspyox", "qrkgmliewc", "nftk", "nftk", "ccjel", "qrkgmliewc", "ocgjsu", "ijy", "glarko", "nbuorw", "nsfspyox", "qkjzgws", "qkjzgws", "fqizrrnmif", "pwqvwmlgri", "nftk", "qrkgmliewc", "jqrlad", "nftk", "zskaqzwo", "glarko", "nsfspyox", "zlfiwwb", "hwlvqgkdbo", "htpvnmozay", "nsfspyox", "zskaqzwo", "htpvnmozay", "zskaqzwo", "nbuorw", "qkjzgws", "zlfiwwb", "pwqvwmlgri", "zskaqzwo", "qengse", "glarko", "qkjzgws", "pwqvwmlgri", "fqizrrnmif", "nbuorw", "nftk", "ijy", "hdemkfr", "nftk", "qkjzgws", "jqrlad", "nftk", "ccjel", "qggx", "ijy", "qengse", "nftk", "htpvnmozay", "qengse", "eonrg", "qengse", "fqizrrnmif", "hwlvqgkdbo", "qengse", "qengse", "qggx", "qkjzgws", "qggx", "pwqvwmlgri", "htpvnmozay", "qrkgmliewc", "qengse", "fqizrrnmif", "qkjzgws", "qengse", "nftk", "htpvnmozay", "qggx", "zlfiwwb", "bwp", "ocgjsu", "qrkgmliewc", "ccjel", "hdemkfr", "nsfspyox", "hdemkfr", "qggx", "zlfiwwb", "nsfspyox", "ijy", "qkjzgws", "fqizrrnmif", "qkjzgws", "qrkgmliewc", "glarko", "hdemkfr", "pwqvwmlgri"];
      const k = 14;
      const expected = ["nftk", "qkjzgws", "qrkgmliewc", "nsfspyox", "qengse", "htpvnmozay", "fqizrrnmif", "glarko", "hdemkfr", "pwqvwmlgri", "qggx", "zskaqzwo", "ijy", "zlfiwwb"];
      expect(topKFrequent(words, k)).to.eql(expected);
    });
  });
});
