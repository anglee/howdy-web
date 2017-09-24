
// const allowedPositions = (() => {
//   const ret = Array(16).fill().map(() => []);
//   for (let i = 2; i <= 15; ++i) {
//     for (let j = 0; j < i; ++j) {
//       if (i % j === 0) {
//         ret[i].push(j);
//       }
//     }
//     let it = i;
//     while (it < 16) {
//       ret[i].push(it);
//       it += i;
//     }
//   }
//   return ret;
// })();
// console.log(allowedPositions);

const allowedPositions = [[],
  [],
  [ 1, 2, 4, 6, 8, 10, 12, 14 ],
  [ 1, 3, 6, 9, 12, 15 ],
  [ 1, 2, 4, 8, 12 ],
  [ 1, 5, 10, 15 ],
  [ 1, 2, 3, 6, 12 ],
  [ 1, 7, 14 ],
  [ 1, 2, 4, 8 ],
  [ 1, 3, 9 ],
  [ 1, 2, 5, 10 ],
  [ 1, 11 ],
  [ 1, 2, 3, 4, 6, 12 ],
  [ 1, 13 ],
  [ 1, 2, 7, 14 ],
  [ 1, 3, 5, 15 ]
];
/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {


  const getCountOfCanWork = (occupied, num) => {
    if (num === 1) {
      return 1;
    }
    const positions = allowedPositions[num];
    let countOfCanWork = 0;
    for (let pos of positions) {
      if (pos <= N && !occupied[pos]) {
        occupied[pos] = true;
        countOfCanWork += getCountOfCanWork(occupied, num - 1);
        occupied[pos] = false;
      }
    }
    return countOfCanWork;
  };

  return getCountOfCanWork(Array(N + 1).fill(false), N);
};

export default countArrangement;