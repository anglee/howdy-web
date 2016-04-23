import {expect} from 'chai';
import solution from './howdy';
import fs from 'fs';

const transformInput = (input) => {
  const lines = input.split('\n');
  const line1 = lines[0];
  const line1Tokens = line1.split(' ');
  const N = parseInt(line1Tokens[0]);
  const Q = parseInt(line1Tokens[1]);
  const line2 = lines[1];
  const plates = line2.split(' ').map((it) => parseInt(it));
  return {Q, plates}
};

const transformOutput = (output) => {
  return output.join('\n');
};
describe('solution', () => {
  it('should work with the sample test', () => {
    const sampleInput = `5 1
3 4 7 6 5`;
    const {Q, plates} = transformInput(sampleInput);
    const output = transformOutput(solution(Q, plates));
    const sampleOutput = `4
6
3
7
5`;
    expect(output).to.equal(sampleOutput);
  });

  it('should work with the sample test', () => {
    const sampleInput = `5 2
3 3 4 4 9`;
    const {Q, plates} = transformInput(sampleInput);
    const output = transformOutput(solution(Q, plates));
    const sampleOutput = `4
4
9
3
3`;
    expect(output).to.equal(sampleOutput);
  });

  it('should work with the sample test', () => {
    const sampleInput = fs.readFileSync('./test11.input').toString();
    const {Q, plates} = transformInput(sampleInput);
    const output = transformOutput(solution(Q, plates));
    const sampleOutput = fs.readFileSync('./test11.output').toString();;
    expect(output).to.equal(sampleOutput);
  });
});
