/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  const moments = [];
  intervals.forEach((it) => {
    moments.push(
      { at: it.start, isStart: true },
      { at: it.end, isStart: false }
    );
  });

  const sorted = moments.sort((a, b) => {
    if (a.at === b.at && a.isStart !== b.isStart) {
      return a.isStart ? 1 : -1;
    }
    return a.at - b.at;
  });

  let meetingCountAtMoment = 0;
  for (let moment of sorted) {
    if (moment.isStart) {
      ++meetingCountAtMoment;
      if (meetingCountAtMoment === 2) {
        return false;
      }
    } else {
      --meetingCountAtMoment;
    }
  }

  return true;
};

export default canAttendMeetings;