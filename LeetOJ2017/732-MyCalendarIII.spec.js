import { expect } from 'chai';
import MyCalendarThree from './732-MyCalendarIII';

describe('LeetOJ 732-MyCalendarIII', () => {
  describe('MyCalendarThree', () => {
    it('should solve the given example', () => {
      const myCalendar = new MyCalendarThree();

      expect(myCalendar.book(10, 20)).to.equal(1); // returns 1
      expect(myCalendar.book(50, 60)).to.equal(1); // returns 1
      expect(myCalendar.book(10, 40)).to.equal(2); // returns 2
      expect(myCalendar.book(5, 15)).to.equal(3); // returns 3
      expect(myCalendar.book(5, 10)).to.equal(3); // returns 3
      expect(myCalendar.book(25, 55)).to.equal(3); // returns 3
    });
  });
});
