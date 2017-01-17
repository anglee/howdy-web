import {expect} from 'chai';
import WordDictionary from './211-AddAndSearchWord';

describe('LeetOJ 211-AddAndSearchWord', () => {
  describe('WordDictionary', () => {
    it('should work with given example', () => {
      const wd = new WordDictionary();
      wd.addWord("bad");
      wd.addWord("dad");
      wd.addWord("mad");
      expect(wd.search("pad")).to.be.false;
      expect(wd.search("bad")).to.be.true;
      expect(wd.search(".ad")).to.be.true;
      expect(wd.search("b..")).to.be.true;
    });
    it('should work with test case', () => {
      const wd = new WordDictionary();
      wd.addWord("bad");
      wd.addWord("bat");
      wd.addWord("mad");
      //console.log(JSON.stringify(wd, null, ' '));
      expect(wd.search("bay")).to.be.false;
      expect(wd.search("bad")).to.be.true;
      expect(wd.search(".ad")).to.be.true;
      expect(wd.search("b..")).to.be.true;
    });
    it('should work with test case', () => {
      const wd = new WordDictionary();
      wd.addWord("bad");
      wd.addWord("bat");
      wd.addWord("mad");
      expect(wd.search("bay")).to.be.false;
      expect(wd.search("bay")).to.be.false;
      wd.addWord("bay");
      expect(wd.search("bay")).to.be.true;
      expect(wd.search(".ad")).to.be.true;
      expect(wd.search(".ad")).to.be.true;
    });
  });
});
