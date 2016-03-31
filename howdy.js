import _ from 'lodash';

const aritmeticSum = (n) => {
  return (n + 1) * n / 2;
};

const solution = (A, M) => {
  let start = 0;
  let end = 0;
  const segments = [];
  //const temp = [];
  const lastPos = {};
  for (end = 0; end < A.length; end++) {
    if (_.has(lastPos, A[end]) && lastPos[A[end]] >= start) {
      segments.push([start, end - 1]);
      //temp.push(A.slice(start, end));
      start = lastPos[A[end]] + 1;
    }
    lastPos[A[end]] = end;
  }
  segments.push([start, end - 1]);
  //temp.push(A.slice(start));
  //console.log(temp);

  let ret = 0;
  let lastEnd = null;
  _.forEach(segments, (seg) => {
    const [start, end] = seg;
    ret += aritmeticSum(end - start + 1);
    //console.log(`+ ${aritmeticSum(end - start + 1)}`);
    if (!_.isNull(lastEnd) && lastEnd >= start) {
      ret -= aritmeticSum(lastEnd - start + 1);
      //console.log(`- ${aritmeticSum(lastEnd - start + 1)}`);
    }
    lastEnd = end;
  });
  return ret;
};

//console.log(solution([3,4,5,5,2]));
//console.log(solution([1,2,1]));

const solution2 = (A, M) => {
  let slicesCount = 0;
  let back = 0;
  let lastPos = {};

  // for each front,
  // find the number of distinct slice that end at the position at `front`
  for (let front = 0; front < A.length; front++) {
    // the distinct slices are:
    // A[front]
    // A[front - 1], A[front]
    // A[front - 2], A[front - 1], A[front]
    // ...
    // A[back], ... , A[front - 2], A[front - 1], A[front]
    // that is (front - back + 1) slices
    //
    // but we need to ensure the slice A[back ... front] is distinct
    // to do that, keep moving `back` forward until is A[back ... front] is distinct
    // or if know exactly where last A[front] appears, just move it to (last_pos + 1)
    if (_.has(lastPos, A[front]) && lastPos[A[front]] >= back) {
      back = lastPos[A[front]] + 1;
    }

    slicesCount += front - back + 1;
    lastPos[A[front]] = front;
  }
  return slicesCount;
};


//export default solution;
export default solution2;
