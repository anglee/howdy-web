import { expect } from 'chai';
import solution from './Hackerrank_MaximumElement';
import fs from 'fs';
const transformInput = (input) => {
  const lines = input.split('\n');
  const N = parseInt(lines[0]);
  const actions = [];
  for (var i = 0; i < N; ++i) {
    const tokens = lines[i + 1].split(' ');
    if (tokens[0] === '1') {
      actions.push({
        type: 'PUSH',
        item: parseInt(tokens[1])
      });
    } else if (tokens[0] === '2') {
      actions.push({
        type: 'POP'
      });
    } else if (tokens[0] === '3') {
      actions.push({
        type: 'PRINT_MAX'
      });
    }
  }
  return actions;
};

const transformOutput = (lines) => {
  return lines.join('\n');
};

describe('Hackerrank_MaximumElement', () => {
  it('should work with sample case', () => {
    const sampleInput = `10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3`;
    const sampleOutput = `26
91`;
    const input = transformInput(sampleInput);
    const output = transformOutput(solution((input)));
    expect(output).to.equal(sampleOutput);
  });

  it('should work with sample case', () => {
    const sampleInput = fs.readFileSync('./HackerRank/Hackerrank_MaximumElement.sampleTest6.input').toString();
    const sampleOutput = fs.readFileSync('./HackerRank/Hackerrank_MaximumElement.sampleTest6.output').toString();

    const input = transformInput(sampleInput);
    const output = transformOutput(solution((input)));
    expect(output).to.equal(sampleOutput);
  });
});
