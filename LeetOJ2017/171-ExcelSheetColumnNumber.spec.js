import { expect } from 'chai';
import titleToNumber from './171-ExcelSheetColumnNumber';

describe('LeetOJ 171-ExcelSheetColumnNumber', () => {
  describe('titleToNumber', () => {
    it('should solve the given example', () => {
      expect(titleToNumber('A')).to.equal(1);
      expect(titleToNumber('B')).to.equal(2);
      expect(titleToNumber('C')).to.equal(3);
      expect(titleToNumber('Z')).to.equal(26);
      expect(titleToNumber('AA')).to.equal(26 + 1);
      expect(titleToNumber('AB')).to.equal(26 + 2);
      expect(titleToNumber('AZ')).to.equal(26 + 26);
      expect(titleToNumber('BA')).to.equal(titleToNumber('AZ') + 1);
      expect(titleToNumber('BA')).to.equal(26 + 26 + 1);
      expect(titleToNumber('BA')).to.equal(26 * 2 + 1);
      expect(titleToNumber('CA')).to.equal(26 * 3 + 1);
      expect(titleToNumber('ZA')).to.equal(26 * 26 + 1);
      expect(titleToNumber('ZZ')).to.equal(26 * 26 + 26);
      expect(titleToNumber('AAA')).to.equal(titleToNumber('ZZ') + 1);
      expect(titleToNumber('AAA')).to.equal(26 * 26 + 26 + 1);
      expect(titleToNumber('AAZ')).to.equal(26 * 26 + 26 + 26);
      expect(titleToNumber('AAZ')).to.equal(26 * 26 + (26 + 26));
      expect(titleToNumber('AAZ')).to.equal(26 * 26 + titleToNumber('AZ'));
      expect(titleToNumber('AZA')).to.equal(26 * 26 + titleToNumber('ZA'));
      expect(titleToNumber('AZZ')).to.equal(26 * 26 + titleToNumber('ZZ'));
      expect(titleToNumber('BAA')).to.equal(26 * 26 * 2 + titleToNumber('AA'));
    });

    it('should solve AAA', () => {
      expect(titleToNumber('AAA')).to.equal(703);
    });

  });
});
