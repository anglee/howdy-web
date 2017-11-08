import { expect } from 'chai';
import MyQueue from './232-ImplementQueueUsingStacks';

describe('LeetOJ 232-ImplementQueueUsingStacks', () => {
  describe('MyQueue', () => {
    it('should solve the given example', () => {
      const q = new MyQueue();
      expect(q.empty()).to.equal(true);
    });
  });
});
