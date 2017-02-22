import { expect } from 'chai';
import numberToWords from './273-IntegerToEnglishWords';

describe('LeetOJ 273-IntegerToEnglishWords', () => {

  describe('numberToWords', () => {
    it('should turn 0 into words', () => {
      expect(numberToWords(0)).to.equal('Zero');
    });

    it('should turn 1 into words', () => {
      expect(numberToWords(1)).to.equal('One');
    });

    it('should turn 21 into words', () => {
      expect(numberToWords(21)).to.equal('Twenty One');
    });

    it('should turn 30 into words', () => {
      expect(numberToWords(30)).to.equal('Thirty');
    });

    it('should turn 199 into words', () => {
      expect(numberToWords(199)).to.equal('One Hundred Ninety Nine');
    });

    it('should turn 504 into words', () => {
      expect(numberToWords(504)).to.equal('Five Hundred Four');
    });

    it('should turn 100 into words', () => {
      expect(numberToWords(100))
        .to.equal('One Hundred');
    });

    it('should turn 1000 into words', () => {
      expect(numberToWords(1000))
        .to.equal('One Thousand');
    });

    it('should turn 1024 into words', () => {
      expect(numberToWords(1024))
        .to.equal('One Thousand Twenty Four');
    });
    it('should turn 2,000,024 into words', () => {
      expect(numberToWords(2000024))
        .to.equal('Two Million Twenty Four');
    });
    it('should turn 123,001,024 into words', () => {
      expect(numberToWords(123001024))
        .to.equal('One Hundred Twenty Three Million One Thousand Twenty Four');
    });

    it('should turn 1,000,000,000 into words', () => {
      expect(numberToWords(1000000000))
        .to.equal('One Billion');
    });

    it('should turn 1,000,000,000 into words', () => {
      expect(numberToWords(1000001000))
        .to.equal('One Billion One Thousand');
    });
  });
});
