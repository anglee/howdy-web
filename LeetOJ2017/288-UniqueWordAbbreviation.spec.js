import { expect } from 'chai';
import ValidWordAbbr from './288-UniqueWordAbbreviation';

describe('LeetOJ 288-UniqueWordAbbreviation', () => {
  describe('ValidWordAbbr', () => {
    it('should solve the given example', () => {
      const dictionary = ["deer", "door", "cake", "card"];
      const obj = new ValidWordAbbr(dictionary);
      expect(obj.isUnique('dear')).to.be.false;
      expect(obj.isUnique('cart')).to.be.true;
      expect(obj.isUnique('cane')).to.be.false;
      expect(obj.isUnique('make')).to.be.true;
    });
    it('should solve OJ test case 1', () => {
      const dictionary = ["hello"];
      const obj = new ValidWordAbbr(dictionary);
      expect(obj.isUnique('hello')).to.be.true;
    });
  });
});
