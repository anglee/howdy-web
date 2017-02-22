import { expect } from 'chai';
import convertToTitle from './168-ExcelSheetColumnTitle';

describe('LeetOJ 168-ExcelSheetColumnTitle', () => {

  describe('convertToTitle', () => {
    it('should solve A', () => {
      expect(convertToTitle(1)).to.equal('A');
    });
    it('should solve B', () => {
      expect(convertToTitle(2)).to.equal('B');
    });
    it('should solve Z', () => {
      expect(convertToTitle(26)).to.equal('Z');
    });
    it('should solve AA', () => {
      expect(convertToTitle(26 + 1)).to.equal('AA');
    });
    it('should solve AB', () => {
      expect(convertToTitle(26 + 2)).to.equal('AB');
    });
    it('should solve AZ', () => {
      expect(convertToTitle(26 * 1 + 26)).to.equal('AZ');
    });
    it('should solve BA', () => {
      expect(convertToTitle(26 * 2 + 1)).to.equal('BA');
    });
    it('should solve BZ', () => {
      expect(convertToTitle(26 * 2 + 26)).to.equal('BZ');
    });
    it('should solve ZA', () => {
      expect(convertToTitle(26 * 26 + 1)).to.equal('ZA');
    });
    it('should solve ZZ', () => {
      expect(convertToTitle(26 * 26 + 26)).to.equal('ZZ');
    });
    it('should solve AAA', () => {
      expect(convertToTitle(26 * 26 * 1 + 26 * 1 + 1)).to.equal('AAA');
    });
    it('should solve ABA', () => {
      expect(convertToTitle(26 * 26 * 1 + 26 * 2 + 1)).to.equal('ABA');
    });
    it('should solve BAA', () => {
      expect(convertToTitle(26 * 26 * 2 + 26 * 1 + 1)).to.equal('BAA');
    });
    it('should solve YYY', () => {
      expect(convertToTitle(26 * 26 * 25 + 26 * 25 + 25)).to.equal('YYY');
    });
  });
});
