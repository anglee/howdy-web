/*
Given a list of back slashes and forward slashes, print them out in such a way that each slash connects to the one before.  For example,

\\\//\\/// =>


\        /
 \  /\  /
  \/  \/
*/
import _ from 'lodash';

const generateLineOfLength = (slashes, length) => {
  const chars = _.repeat(' ', length).split('');
  slashes.forEach(slash => chars[slash.x] = slash.char);
  return chars.join('');
};

const solution = (input) => {
  if (input.length <= 1) {
    return input;
  }

  let endY = 0;
  const chars = input.split('');

  // for each slash, find the where to print (x, y) and form struct {x, y, char}
  const slashes = chars.map((char, x) => {
    if (char === '/') {
      return {x, y: --endY, char };
    } else {
      return {x, y: endY++, char };
    }
  });

  // group slashes({x, y, char}) by line (y) and keyed by 'y'
  const slashesGroups = _.groupBy(slashes, 'y');

  // generate result line by line
  const minY = _.minBy(slashes, 'y').y;
  const maxY = _.maxBy(slashes, 'y').y;
  const createLine = (sls) => generateLineOfLength(sls, chars.length);
  const lines = _.range(minY, maxY + 1).map(y => slashesGroups[`${y}`]).map(createLine);

  return lines.join('\n'); // OR console.log(lines.join('\n'));
};

export default solution;
