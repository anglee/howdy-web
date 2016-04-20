import _ from 'lodash';

"use strict";
const processTest = (n, k, A) => {
  return k;
};

const solution = (input) => {
  const lines = input.split('\n');
  const T = parseInt(lines[0]);
  let output = '';
  for (let i = 0; i < T; i++) {
    const line1 = lines[1 + i * 2].trim();
    const line1Tokens = line1.split(' ');
    const n = parseInt(line1Tokens[0]);
    const k = parseInt(line1Tokens[1]);
    const line2 = lines[1 + i * 2 + 1].trim();
    const line2Tokens = line2.split(' ');
    const A = line2Tokens.map((it) => parseInt(it));
    const ret = processTest(n, k, A);

    output += `${ret}\n`; //console.log(ret);
  }
  return output.trim();
};

//const sampleInput = `2
//123
//456`;
//console.log(solution(sampleInput));

export default solution;
