import { expect } from 'chai';
import canAttendMeetings from './252-MeetingRooms';

class Interval {
  constructor ([start, end]) {
    this.start = start;
    this.end = end;
  }
}

describe('LeetOJ 252-MeetingRooms', () => {
  describe('canAttendMeetings', () => {
    it('should solve the given example', () => {
      const intervals = ([[0, 30],[5, 10],[15, 20]]).map(it => new Interval(it));
      expect(canAttendMeetings(intervals)).to.be.false;
    });
    it('should solve the test case - back to back', () => {
      const intervals = ([[0, 5],[5, 10],[15, 20]]).map(it => new Interval(it));
      expect(canAttendMeetings(intervals)).to.be.true;
    });
    it('should solve the test case - empty', () => {
      const intervals = ([]).map(it => new Interval(it));
      expect(canAttendMeetings(intervals)).to.be.true;
    });
    it('should solve the test case - back to back', () => {
      const intervals = ([[13,15],[1,13]]).map(it => new Interval(it));
      expect(canAttendMeetings(intervals)).to.be.true;
    });

  });
});

