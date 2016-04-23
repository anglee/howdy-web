import _ from 'lodash';

let previousPrimes = [];
const getNextPrime = () => {
  if (previousPrimes.length === 0) {
    previousPrimes.push(2);
    return 2;
  } else if (previousPrimes.length === 1) {
    previousPrimes.push(3);
    return 3;
  } else {
    const last = previousPrimes[previousPrimes.length - 1];
    let i = last + 2;
    while (true) {
      if (!_.some(previousPrimes, (pp) => i % pp === 0)) {
        previousPrimes.push(i);
        return i;
      } else {
        i+=2;
      }
    }
  }
};

//function* primeMaker() {
//  yield 2;
//  yield 3;
//  const previousPrimes = [2, 3];
//  let i = 5;
//  while (true) {
//    console.log("i", i);
//    if (!_.some(previousPrimes, (pp) => i % pp === 0)) {
//      previousPrimes.push(i);
//      yield i;
//    }
//    i+=2;
//  }
//}

const solution = (Q, plates) => {

  previousPrimes = [];
  //const primeGen = primeMaker();

  let pile = plates;
  let divisiblePiles = [];
  for (let i = 0; i < Q; i++) {
    const prime = getNextPrime();
    //const prime = primeGen.next().value;
    const divisiblePile = [];
    const lastPile = [];
    while (!_.isEmpty(pile)) {
      const plate = pile.pop();
      if (plate % prime === 0) {
        divisiblePile.push(plate);
      } else {
        lastPile.push(plate);
      }
    }
    divisiblePiles.push(divisiblePile);
    pile = lastPile;
  }
  return [...divisiblePiles, pile].reduce((ret, pi) => {
    return [...ret, ...pi.reverse()];
  }, []);
};

console.log(solution(1, [3, 4, 7, 6, 5]));

export default solution;
