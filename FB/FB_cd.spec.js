import { expect } from 'chai';
import cd from './FB_cd';

describe('FB_cd', () => {
  describe('should change director' +
    'given current director(pwd) and the relative path', () => {

    it('should work', () => {
      expect(cd('/github/anglee', 'foo/bar')).to.equal('/github/anglee/foo/bar');
    });

    it('should work with ..', () => {
      expect(cd('/github/anglee', '../foo/bar')).to.equal('/github/foo/bar');
    });
  });
});
