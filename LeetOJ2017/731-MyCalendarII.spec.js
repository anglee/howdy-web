import { expect } from 'chai';
import MyCalendarTwo from './731-MyCalendarII';

describe('LeetOJ 731-MyCalendarII', () => {
  describe('MyCalendarTwo', () => {
    it('should solve the given example', () => {
      const myCalendar = new MyCalendarTwo();
      expect(myCalendar.book(10, 20)).to.be.true; // returns true
      expect(myCalendar.book(50, 60)).to.be.true; // returns true
      expect(myCalendar.book(10, 40)).to.be.true; // returns true
      expect(myCalendar.book(5, 15)).to.be.false; // returns false
      expect(myCalendar.book(5, 10)).to.be.true; // returns true
      expect(myCalendar.book(25, 55)).to.be.true; // returns true
    });
  });
});
