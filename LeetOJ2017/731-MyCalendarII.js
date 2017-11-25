
var MyCalendarTwo = function() {
  this.moments = [];
};

const binarySearch = (moments, moment, compFunc) => {
  if (moments.length === 0) { return 0; }
  let i = 0;
  let j = moments.length - 1;
  if (compFunc(moments[j], moment) < 0) { return moments.length; }

  while (i < j) {
    const m = Math.floor((i + j) / 2);
    if (compFunc(moments[m], moment) === 0) {
      return m;
    } else if (compFunc(moments[m], moment) < 0) {
      i = m + 1;
    } else {
      j = m;
    }
  }
  return i;
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
  // const moments = this.moments.concat([
  //   { time: start, isStart: true },
  //   { time: end - 1, isStart: false },
  // ]).sort((m1, m2) => {
  //   if (m1.time !== m2.time) {
  //     return m1.time - m2.time;
  //   }
  //   return m1.isStart ? -1 : 1;
  // });

  const comp = (m1, m2) => {
    if (m1.time !== m2.time) {
      return m1.time - m2.time;
    }
    return m1.isStart ? -1 : 1;
  };
  const moments = this.moments.slice(0);
  const startMoment = { time: start, isStart: true };
  const endMoment = { time: end - 1, isStart: false };
  moments.splice(binarySearch(moments, startMoment, comp), 0, startMoment);
  moments.splice(binarySearch(moments, endMoment, comp), 0, endMoment);

  let bookCount = 0;
  for (let moment of moments) {
    if (moment.isStart) {
      bookCount++;
      if (bookCount === 3) {
        return false;
      }
    } else {
      bookCount--;
    }
  }

  this.moments = moments;
  return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = Object.create(MyCalendarTwo).createNew()
 * var param_1 = obj.book(start,end)
 */

export default MyCalendarTwo;
