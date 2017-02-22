import { expect } from 'chai';
import simplifyPath from './071-SimplifyPath';

describe('LeetOJ 071-SimplifyPath', () => {

  describe('simplifyPath', () => {
    it('should solve the given example 1', () => {
      const path = '/home/';
      expect(simplifyPath(path)).to.equal('/home');
    });
    it('should solve the given example 2', () => {
      const path = '/a/./b/../../c/';
      expect(simplifyPath(path)).to.equal('/c');
    });

    it('should solve the corner case', () => {
      const path = '/../';
      expect(simplifyPath(path)).to.equal('/');
    });

    it('should solve the corner case', () => {
      const path = '/home//foo/';
      expect(simplifyPath(path)).to.equal('/home/foo');
    });
  });
});
