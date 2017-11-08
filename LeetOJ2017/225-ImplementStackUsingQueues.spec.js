import { expect } from 'chai';
import MyStack from './225-ImplementStackUsingQueues';

describe('LeetOJ 225-ImplementStackUsingQueues', () => {
  describe('MyStack', () => {
    it('should solve the given example', () => {
      const s = new MyStack();
      expect(s.empty()).to.equal(true);
    });
  });
});
