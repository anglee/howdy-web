import _ from 'lodash';


// p(l, i) means range [i-l, i+l] in S is palindrome or not
// p(l, i) = S[i - l] === S[i + l] ? p[l - 1, i] : false

const howdy = (S) => {
  let maxSubstring = '';
  let p = [];
  let plast = _.map(S, () => true);
  for (let l = 0; l < S.length; l++) {
    for (let i = 0; i < S.length; i++) {
      if (i - l < 0) {
        p.push(false);
      } else if (i + l >= S.length) {
        p.push(false);
      } else {
        p.push(S[i - l] === S[i + l] ? plast[i] : false);
        if (_.last(p) && l+1 > maxSubstring.length) {
          maxSubstring = S.substring(i - l, i + l + 1);
        }
      }
    }
    plast = p;
  }
  return maxSubstring;
};

export default howdy;
