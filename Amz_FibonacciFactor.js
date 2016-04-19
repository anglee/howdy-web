import _ from 'lodash';

"use strict";

const findCommonFactor = (A, B) => {
  if (B === 0) {
    return A;
  }
  if (B === 1) {
    return 1;
  }

  if (A < B) {
    return findCommonFactor(B, A);
  } else if (A === B) {
    return A;
  } else { // A > B
    return findCommonFactor(B, A % B);
  }
};

const processTest = (K) => {
  const F = 100;
  const D = 100;
  let prevPrev = 0;
  let prev = 1;
  while (true) {
    const F = prev + prevPrev;
    const D = findCommonFactor(F, K);
    if (D !== 1) {
      return {F, D}
    }
    prevPrev = prev;
    prev = F;
  }
};

const solution = (input) => {
  const lines = input.split('\n');
  const T = parseInt(lines[0]);
  let output = '';
  for (let i = 0; i < T; i++) {
    const K = parseInt(lines[1 + i]);
    const ret = processTest(K);

    //console.log(ret);
    output += `${ret.F} ${ret.D}\n`;
  }
  return output.trim();
};

//const sampleInput = `2`;
//console.log(solution(sampleInput));

export default solution;
