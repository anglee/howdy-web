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
  // the key insight here is:
  // say coins are [2, 3, 5, 7], N = 10
  // row |      coins                                | N =  0  1  2  3  4  5  6  7  8  9  10
  //------------------------------------------------------------------------------------------
  //  0  |          2 // only using $2 coin          |     (1) 0  1 (0) 1  0 (1) 0  1 [0]  1
  //  1  |       3, 2 // only using $3, $2 coins     |      1  0  1  1  1  1 [2] 1  2 [2]  2
  //  2  |    5, 3, 2 // only using $5, $3, $2 coins |      1  0  1  1  1  2  2  2  3  3  {4}
  //  3  | 7, 5, 3, 2 // using $7, $5, $3, $2 coins  |      1  0  1 {1} 1  2  2  3  3  4  {5}
  //
  // We fill the table starting with row 0, left to right,
  // then row 1, left to right,
  // then row 2, left to right, and so on so forth
  // with this formula: cell[row][N] = cell[row - 1][N] + cell[row][N - (new_coin)]
  //
  // example 1: cell[1][9] = cell[0][9] + cell[0][9-3], new_coin == diff ($3,$2) and ($2) == $3
  //              [2]      =    [0]     +    [2]
  // example 2: cell[3][10] = cell[2][10] + cell[3][10-7], new_coin in the row is: $7
  //              {5}       =   {4}     +     {1}
  //
  // Let's explain example 1:
  // to form N = $9
  // in addition to using $2 coins (row 0)
  // if using no $3 coin, there are 0 ways: cell[0][9] == 0
  // if using  1 $3 coin, there are 1 ways: cell[0][9-3] == cell[0][6] == 1
  // if using  2 $3 coin, there are 0 ways: cell[0][9-3*2] == cell[0][3] == 0
  // if using  3 $3 coin, there are 0 ways: cell[0][9-3*3] == cell[0][0] == 1
  // that is cell[1][9] = cell[0][9] + cell[0][6] + cell[0][3] + cell[0][0]
  // similarly, cell[1][6] = cell[0][6] + cell[0][3] + cell[0][0]
  // and notice that cell[1][9] = cell[0][9] + cell[1][6]
  //
  // Let's explain example 2:
  // to form N = $10,
  // if not using the $7 coin at all, there are 4 ways, cell[2][10] == 4
  // (remember that cell[2][10] denotes counts of ways to form 10 with [5, 3, 2])
  // if using the $7 coin, there are cell[3][10-7] = cell[3][3] == 1 ways
  // combine not using $7 and using $7:
  // cell[3][10] = cell[2][10] + cell[3][3] = 4 + 1 = 5
  //
  // note when N = 0, there is aways 1 way (base case)
  const cell = [];
  for (var i = 0; i < Ci.length; ++i) {
    cell.push([1]); // push new row into table
    for (var j = 1; j <= N; ++j) {
      const top = i === 0 ? 0 : cell[i - 1][j];
      const left = j - Ci[i] >= 0 ? cell[i][j - Ci[i]] : 0;
      cell[i].push(top + left);
    }
  }
  //console.log(cell);
  return cell[Ci.length - 1][N];

};

const processTest = (N, M, Ci) => {
  //return getCoinChange(N, Ci);
  return getCoinChangeByDynamicProgramming(N, Ci);
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
