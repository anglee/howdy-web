import _ from 'lodash';

const solution = (N) => {
  let lastOne = '';
  let i = 0;
  let maxGap = 0;
  while (N !== 0) {
    ++i;
    if (N %2 === 1) {
      const gap = i - lastOne - 1;
      maxGap = Math.max(gap, maxGap);
      lastOne = i;
    }
    N >>= 1;
  }
  return maxGap;
};

//console.log(solution(1041));

export default solution;
