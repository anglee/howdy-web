import {expect} from 'chai';
import {MinStack, MinStack2} from './leet-39_Min-Stack';
describe('leet-39_Min-Stack', () => {
  describe('MinStack', () => {
    it('should should work', () => {
      const s = new MinStack();
      s.push(1);
      expect(s.top()).to.equal(1);
      expect(s.getMin()).to.equal(1);
    });
    it('should should work', () => {
      const s = new MinStack();
      s.push(1);
      s.push(2);
      expect(s.top()).to.equal(2);
      expect(s.getMin()).to.equal(1);
    });
    it('should should work', () => {
      const s = new MinStack();
      s.push(3);
      s.push(2);
      s.push(1);
      expect(s.top()).to.equal(1);
      expect(s.getMin()).to.equal(1);
      expect(s.pop()).to.equal(1);
      expect(s.top()).to.equal(2);
      expect(s.getMin()).to.equal(2);
      expect(s.pop()).to.equal(2);
      expect(s.top()).to.equal(3);
      expect(s.getMin()).to.equal(3);
    });
    it('should should work', () => {
      const s = new MinStack();
      s.push(1);
      s.push(4);
      s.push(3);
      s.push(0);
      s.push(3);
      expect(s.top()).to.equal(3);
      expect(s.getMin()).to.equal(0);
      expect(s.pop()).to.equal(3);
      expect(s.top()).to.equal(0);
      expect(s.getMin()).to.equal(0);
      expect(s.pop()).to.equal(0);
      expect(s.top()).to.equal(3);
      expect(s.getMin()).to.equal(1);
    });
  });


  describe('MinStack2', () => {
    it('should should work', () => {
      const s = new MinStack2();
      s.push(1);
      expect(s.top()).to.equal(1);
      expect(s.getMin()).to.equal(1);
    });
    it('should should work', () => {
      const s = new MinStack2();
      s.push(1);
      s.push(2);
      expect(s.top()).to.equal(2);
      expect(s.getMin()).to.equal(1);
    });
    it('should should work', () => {
      const s = new MinStack2();
      s.push(3);
      s.push(2);
      s.push(1);
      expect(s.top()).to.equal(1);
      expect(s.getMin()).to.equal(1);
      expect(s.pop()).to.equal(1);
      expect(s.top()).to.equal(2);
      expect(s.getMin()).to.equal(2);
      expect(s.pop()).to.equal(2);
      expect(s.top()).to.equal(3);
      expect(s.getMin()).to.equal(3);
    });
    it('should should work', () => {
      const s = new MinStack2();
      s.push(1);
      s.push(4);
      s.push(3);
      s.push(0);
      s.push(3);
      expect(s.top()).to.equal(3);
      expect(s.getMin()).to.equal(0);
      expect(s.pop()).to.equal(3);
      expect(s.top()).to.equal(0);
      expect(s.getMin()).to.equal(0);
      expect(s.pop()).to.equal(0);
      expect(s.top()).to.equal(3);
      expect(s.getMin()).to.equal(1);
    });
  });
});
