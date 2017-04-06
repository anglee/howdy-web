import { expect } from 'chai';
import licenseKeyFormatting from './482-LicenseKeyFormatting';

describe('LeetOJ 482-LicenseKeyFormatting', () => {
  describe('licenseKeyFormatting', () => {
    it('should solve the given example 1', () => {

      const S = "2-4A0r7-4k";
      const K = 4;
      expect(licenseKeyFormatting(S, K)).to.equal(
        "24A0-R74K"
      );
    });
    it('should solve the given example 2', () => {

      const S = "2-4A0r7-4k";
      const K = 3;
      expect(licenseKeyFormatting(S, K)).to.equal(
        "24-A0R-74K"
      );
    });
  });
});
