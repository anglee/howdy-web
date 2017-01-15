import _ from 'lodash';

const breakBills = (targetNum, bills) => {
  // assume that bills are sorted from big to small
  if (targetNum === 0) {
    return 1;
  }
  if (_.isEmpty(bills)) {
    return 0;
  }

  let ways = 0;
  const largestBill = bills[0];
  for (let i = 0; i * largestBill <= targetNum; i++) {
    ways += breakBills(targetNum - i * largestBill, _.tail(bills))
  }
  return ways;
};

//breakBills(1, [1]) === 1;
//
//breakBills(6, [1]) === 1;
//
//breakBills(6, [5, 1]) ===
//  breakBills(6, [1]) // no use of 5
//  + breakBills(1, [1]) // use of 5
//
//breakBills(11, [5, 1]) ===
//+  breakBills(11, [1]) // use of 0 Five
//+  breakBills(6, [1]) // use of 1 Five
//+ breakBills(1, [1]) // use of 2 Five's
//
//breakBills(16, [10, 5, 1]) ===
//+  breakBills(16, [5, 1]) // no use of no Ten's
//+  breakBills(6, [5, 1]) // no use of 1 Ten
//
// try to figure out the base cases:
//
//breakBills(1, [1]) === breakBills(1, []) + breakBills(0, []);
//breakBills(2, [1]) === breakBills(2, []) + breakBills(1, []) + breakBills(0, []);
// from above, I deduced:
// for 0:
// breakBills(0, []) === 1;
// for everything else:
// breakBills(*, []) === 0;


const howdy = _.partial(breakBills, _, [100, 50, 20, 10, 5, 1]);
// see also HackerRank_CoinChange

export default howdy;
