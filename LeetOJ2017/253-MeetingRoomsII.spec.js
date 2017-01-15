import {expect} from 'chai';
import minMeetingRooms from './253-MeetingRoomsII';

describe('LeetOJ 253-MeetingRoomsII', () => {
  describe('minMeetingRooms', () => {
    it('should work with given example', () => {
      const intervals = [[0, 30],[5, 10],[15, 20]];
      expect(minMeetingRooms(intervals)).to.equal(2);
    });
    it('should work with empty input', () => {
      const intervals = [];
      expect(minMeetingRooms(intervals)).to.equal(0);
    });
    it('should work with test case', () => {
      const intervals = [[2,7]];
      expect(minMeetingRooms(intervals)).to.equal(1);
    });
  });
});


