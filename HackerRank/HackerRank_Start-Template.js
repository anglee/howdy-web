import _ from 'lodash';

"use strict";

const processTest = (K) => {
  return K;
};

const solution = (input) => {
  const lines = input.split('\n');
  const T = parseInt(lines[0]);
  let output = '';
  for (let i = 0; i < T; i++) {
    const K = parseInt(lines[1 + i].trim());
    const ret = processTest(K);

    //console.log(ret);
    output += `${ret}\n`;
  }
  return output.trim();
};

//const sampleInput = `2
//123
//456`;
//console.log(solution(sampleInput));

export default solution;
