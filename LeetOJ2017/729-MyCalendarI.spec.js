import { expect } from 'chai';
import MyCalendar from './729-MyCalendarI';

describe('LeetOJ 729-MyCalendarI', () => {
  describe('MyCalendar', () => {
    it('should solve the given example', () => {
      const myCalendar = new MyCalendar();
      expect(myCalendar.book(10, 20)).to.be.true; // returns true
      expect(myCalendar.book(15, 25)).to.be.false; // returns false
      expect(myCalendar.book(20, 30)).to.be.true; // returns true
    });
  });
});
