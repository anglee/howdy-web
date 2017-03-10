import { expect } from 'chai';
import plusOne from './066-PlusOne';

describe('LeetOJ 066-PlusOne', () => {
  describe('plusOne', () => {
    it('should solve the given example', () => {
      expect(plusOne('999'.split('').map(it => parseInt(it, 10))).join('')).to.eql('1000');
    });
  });
});
