import {expect} from 'chai';
import multiply from './043-MultiplyStrings';

describe('LeetOJ 043-MultiplyStrings', () => {
  describe('multiply', () => {
    it('should solve the test case 1 * 1', () => {
      expect(multiply('1', '1')).to.equal('1');
    });
    it('should solve the test case 9 * 9', () => {
      expect(multiply('9', '9')).to.equal('81');
    });
    it('should solve the test case 10 * 10', () => {
      expect(multiply('10', '10')).to.equal('100');
    });
    it('should solve the test case 10 * 11', () => {
      expect(multiply('10', '11')).to.equal('110');
    });
    it('should solve the test case 99 * 99', () => {
      expect(multiply('99', '99')).to.equal('9801');
    });
    it('should solve the test case 9133 * 0', () => {
      expect(multiply('9133', '0')).to.equal('0');
    });

    it('should solve the test case 0 * 52', () => {
      expect(multiply('0', '52')).to.equal('0');
    });
  });
});
