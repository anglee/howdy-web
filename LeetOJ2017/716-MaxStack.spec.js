import { expect } from 'chai';
import MaxStack from './716-MaxStack';

describe('LeetOJ 716-MaxStack', () => {
  describe('MaxStack', () => {
    it('should solve the given example', () => {
      const maxStack = new MaxStack();
      maxStack.push(5);
      maxStack.push(1);
      maxStack.push(5);
      expect(maxStack.top()).to.equal(5);
      expect(maxStack.popMax()).to.equal(5);
      expect(maxStack.top()).to.equal(1);
      expect(maxStack.peekMax()).to.equal(5);
      expect(maxStack.pop()).to.equal(1);
      expect(maxStack.top()).to.equal(5);
    });
    it('should solve the test case', () => {
      const maxStack = new MaxStack();
      maxStack.push(5);
      maxStack.push(1);
      maxStack.push(6);
      maxStack.push(4);
      expect(maxStack.top()).to.equal(4);
      expect(maxStack.popMax()).to.equal(6);
      expect(maxStack.top()).to.equal(4);
      expect(maxStack.peekMax()).to.equal(5);
      expect(maxStack.pop()).to.equal(4);
      expect(maxStack.top()).to.equal(1);
    });

    it('should solve OJ test case 2', () => {
      const maxStack = new MaxStack();
      maxStack.push(-23);
      expect(maxStack.peekMax()).to.equal(-23);
      maxStack.push(-74);
      expect(maxStack.popMax()).to.equal(-23);
      maxStack.push(-4);
      maxStack.push(20);
      maxStack.push(68);
      expect(maxStack.top()).to.equal(68);
      maxStack.push(83);
      expect(maxStack.peekMax()).to.equal(83);
      maxStack.push(73);
      expect(maxStack.popMax()).to.equal(83);
      expect(maxStack.peekMax()).to.equal(73);
    });
  });
});
