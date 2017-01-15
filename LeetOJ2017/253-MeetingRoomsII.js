import _ from 'lodash';

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const moments = [];
  intervals.forEach((interval) => {
    moments.push({
      time: interval[0],
      isStart: true,
    });
    moments.push({
      time: interval[1],
      isStart: false,
    });
  });

  moments.sort((a, b) => {
    if (a.time === b.time && a.isStart !== b.isStart) {
      return a.isStart ? 1 : -1;
    }
    return a.time - b.time;
  });

  let roomsNeeded = 0;
  let maxRoomsNeeded = 0;
  moments.forEach((m) => {
    if (m.isStart) {
      roomsNeeded++;
    } else {
      roomsNeeded--;
    }
    if (roomsNeeded > maxRoomsNeeded) {
      maxRoomsNeeded = roomsNeeded;
    }
  });

  return maxRoomsNeeded;
};

export default minMeetingRooms;
