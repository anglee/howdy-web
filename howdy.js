import _ from 'lodash';

//const Primes = [2, 3, 5, 7, 11, 13];

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

const solution = (Q, plates) => {
  //const primes = Primes.slice(0, Q);
  previousPrimes = [];

  let pile = plates;
  let divisiblePiles = [];
  for (let i = 0; i < Q; i++) {
    const prime = getNextPrime();
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

export default solution;
