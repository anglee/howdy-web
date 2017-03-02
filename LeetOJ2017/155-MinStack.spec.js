import { expect } from 'chai';
import MinStack from './155-MinStack';

describe('LeetOJ 155-MinStack', () => {
  describe('MinStack', () => {
    it('should solve the given example', () => {
      const minStack = new MinStack();
      minStack.push(-2);
      minStack.push(0);
      minStack.push(-3);
      expect(minStack.getMin()).to.equal(-3);
      minStack.pop();
      expect(minStack.top()).to.equal(0);
      expect(minStack.getMin()).to.equal(-2);
    });

    it('should solve test case 1', () => {
      const minStack = new MinStack();
      minStack.push(0);
      minStack.push(1);
      minStack.push(0);
      expect(minStack.getMin()).to.equal(0);
      minStack.pop();
      expect(minStack.getMin()).to.equal(0);
    });
  });
});
