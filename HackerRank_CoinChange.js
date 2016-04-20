import _ from 'lodash';

"use strict";

const getCoinChange = (N, Ci) => {
  if (N === 0) {
    return 1;
  }
  if (_.isEmpty(Ci)) {
    return 0;
  }
  const head = _.head(Ci);
  const tail = _.tail(Ci);
  let ret = 0;
  for (let i = 0; i * head <= N; ++i) {
    ret += getCoinChange(N - i * head, tail);
  }
  return ret;
};
const getCoinChangeByDynamicProgramming = (N, Ci) => {
  // TODO https://gist.github.com/jeanlauliac/8674996
};

const processTest = (N, M, Ci) => {
  return getCoinChange(N, Ci);
  //return getCoinChangeByDynamicProgramming(N, Ci);
};

const solution = (input) => {
  const lines = input.split('\n');
  let output = '';
  const line1 = lines[0].trim();
  const line1Tokens = line1.split(' ');
  const N = parseInt(line1Tokens[0]);
  const M = parseInt(line1Tokens[1]);
  const line2 = lines[1].trim();
  const line2Tokens = line2.split(' ');
  const Ci = line2Tokens.map((it) => parseInt(it));
  const ret = processTest(N, M, Ci);

  output += `${ret}\n`; //console.log(ret);
  return output.trim();
};

//const sampleInput = `2
//123
//456`;
//console.log(solution(sampleInput));

export default solution;
