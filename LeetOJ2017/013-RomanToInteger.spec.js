import { expect } from 'chai';
import romanToInt from './013-RomanToInteger';

describe('LeetOJ 013-RomanToInteger', () => {

  describe('romanToInt', () => {
    it('should solve test case 1', () => {
      expect(romanToInt('I')).to.equal(1);
    });
    it('should solve test case 2', () => {
      expect(romanToInt('II')).to.equal(2);
    });
    it('should solve test case 3', () => {
      expect(romanToInt('III')).to.equal(3);
    });
    it('should solve test case 4', () => {
      expect(romanToInt('IV')).to.equal(4);
    });
    it('should solve test case 5', () => {
      expect(romanToInt('V')).to.equal(5);
    });
    it('should solve test case 6', () => {
      expect(romanToInt('VI')).to.equal(6);
    });
    it('should solve test case 7', () => {
      expect(romanToInt('VII')).to.equal(7);
    });
    it('should solve test case 8', () => {
      expect(romanToInt('VIII')).to.equal(8);
    });
    it('should solve test case 9', () => {
      expect(romanToInt('IX')).to.equal(9);
    });
    it('should solve test case 10', () => {
      expect(romanToInt('X')).to.equal(10);
    });
    it('should solve test case 11', () => {
      expect(romanToInt('XI')).to.equal(11);
    });
    it('should solve test case 12', () => {
      expect(romanToInt('XII')).to.equal(12);
    });
    it('should solve test case 13', () => {
      expect(romanToInt('XIII')).to.equal(13);
    });
    it('should solve test case 14', () => {
      expect(romanToInt('XIV')).to.equal(14);
    });
    it('should solve test case 15', () => {
      expect(romanToInt('XV')).to.equal(15);
    });
    it('should solve test case 16', () => {
      expect(romanToInt('XVI')).to.equal(16);
    });
    it('should solve test case 17', () => {
      expect(romanToInt('XVII')).to.equal(17);
    });
    it('should solve test case 18', () => {
      expect(romanToInt('XVIII')).to.equal(18);
    });
    it('should solve test case 19', () => {
      expect(romanToInt('XIX')).to.equal(19);
    });
    it('should solve test case 20', () => {
      expect(romanToInt('XX')).to.equal(20);
    });
    it('should solve test case 21', () => {
      expect(romanToInt('XXI')).to.equal(21);
    });
    it('should solve test case 22', () => {
      expect(romanToInt('XXII')).to.equal(22);
    });
    it('should solve test case 23', () => {
      expect(romanToInt('XXIII')).to.equal(23);
    });
    it('should solve test case 24', () => {
      expect(romanToInt('XXIV')).to.equal(24);
    });
    it('should solve test case 25', () => {
      expect(romanToInt('XXV')).to.equal(25);
    });
    it('should solve test case 26', () => {
      expect(romanToInt('XXVI')).to.equal(26);
    });
    it('should solve test case 27', () => {
      expect(romanToInt('XXVII')).to.equal(27);
    });
    it('should solve test case 28', () => {
      expect(romanToInt('XXVIII')).to.equal(28);
    });
    it('should solve test case 29', () => {
      expect(romanToInt('XXIX')).to.equal(29);
    });
    it('should solve test case 30', () => {
      expect(romanToInt('XXX')).to.equal(30);
    });
    it('should solve test case 31', () => {
      expect(romanToInt('XXXI')).to.equal(31);
    });
    it('should solve test case 40', () => {
      expect(romanToInt('XL')).to.equal(40);
    });
    it('should solve test case 50', () => {
      expect(romanToInt('L')).to.equal(50);
    });
    it('should solve test case 60', () => {
      expect(romanToInt('LX')).to.equal(60);
    });
    it('should solve test case 70', () => {
      expect(romanToInt('LXX')).to.equal(70);
    });
    it('should solve test case 80', () => {
      expect(romanToInt('LXXX')).to.equal(80);
    });
    it('should solve test case 90', () => {
      expect(romanToInt('XC')).to.equal(90);
    });
    it('should solve test case 100', () => {
      expect(romanToInt('C')).to.equal(100);
    });
    it('should solve test case 101', () => {
      expect(romanToInt('CI')).to.equal(101);
    });
    it('should solve test case 150', () => {
      expect(romanToInt('CL')).to.equal(150);
    });
    it('should solve test case 200', () => {
      expect(romanToInt('CC')).to.equal(200);
    });
    it('should solve test case 300', () => {
      expect(romanToInt('CCC')).to.equal(300);
    });
    it('should solve test case 400', () => {
      expect(romanToInt('CD')).to.equal(400);
    });
    it('should solve test case 500', () => {
      expect(romanToInt('D')).to.equal(500);
    });
    it('should solve test case 600', () => {
      expect(romanToInt('DC')).to.equal(600);
    });
    it('should solve test case 700', () => {
      expect(romanToInt('DCC')).to.equal(700);
    });
    it('should solve test case 800', () => {
      expect(romanToInt('DCCC')).to.equal(800);
    });
    it('should solve test case 900', () => {
      expect(romanToInt('CM')).to.equal(900);
    });
    it('should solve test case 1000', () => {
      expect(romanToInt('M')).to.equal(1000);
    });
    it('should solve test case 1600', () => {
      expect(romanToInt('MDC')).to.equal(1600);
    });
    it('should solve test case 1700', () => {
      expect(romanToInt('MDCC')).to.equal(1700);
    });
    it('should solve test case 1900', () => {
      expect(romanToInt('MCM')).to.equal(1900);
    });
    it('should solve test case 1996', () => {
      expect(romanToInt("MCMXCVI")).to.equal(1996);
    });
    it('should solve test case', () => {
      expect(romanToInt('DCXXI')).to.equal(621);
    });
  });
});
