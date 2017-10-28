/*
It was not specified how string like '2019/12/2019/12/20' should be parsed. It could be parsed as:
1. (DATE: 2019/12/20)(NUMBER: 19)(NUMBER: 12)(NUMBER: 20)
2. (NUMBER: 2019)(NUMBER: 12)(DATE: 2019/12/20)
3. (NUMBER: 2019)(NUMBER: 12)(NUMBER: 2019)(NUMBER: 12)(NUMBER: 20)
Also, it is not specified how strings like 'AB-793' should be parsed. It could be parsed as:
1. (ALPHABETS: 'AB')(NUMBER: 793)
2. (ALPHABETS: 'AB')(NUMBER: -793)
Similarly, '793.8.8'
1. (NUMBER: 793)(NUMBER: 8)(NUMBER: 8)
2. (NUMBER: 793.8)(NUMBER: 8)
3. (NUMBER: 793)(NUMBER: 8.8)

To address these, the 1st assumption I made was:
'-' will ever only be treated as negative sign, and '.' will ever only be treated as a decimal mark
if and only if *the whole string can be parsed a single (float) number*.

For example:
while '-793.8' is parsed as (NUMBER: -793.8),
'AB-793.8' is parsed as (ALPHABETS: 'AB')(NUMBER: 793)((NUMBER: 8)
and '793.8.8' is parsed as (NUMBER: 793)(NUMBER: 8)(NUMBER: 8).

With the 1st assumption, for a input string that is not *a single negative (float) number*,
while '-' can't mean negative sign, both '-' and '/' can still be ambiguously treated as
either 'separator within a date string' or 'separator separating different basic types substrings'.

So I made the 2nd assumption:
'-' and '/' will be aggressively treated as separators within date strings as long as
the formed date string is valid.

For example:
In the case '2019/12/2019/12/20', the code will greedily search the date strings from left to right,
 and result in: (DATE: 2019/12/20)(NUMBER: 19)(NUMBER: 12)(NUMBER: 20).
But notice that, '2019/99/2019/12/20' is parsed as (NUMBER: 2019)(NUMBER: 99)(DATE: 2019/12/20)
 because '2019/99/20' is not a valid date string.

It was not clear to me whether strings with leading zeros like '001' is considered
a valid NUMBER string, I made the assumption to assume it is.

It wasn't specified if each of the strings could always be parsed into same count of parts
and if 2 strings are otherwise tie. In such case, the code breaks the tie by parts count,
e.g. 'a 1' shows up before 'a 1 c'

 */

const _ = require('lodash');

// The 3 basic types:
const NUMBER = 0;
const DATE = 1;
const ALPHABETS = 2;

const getNumberToken = (string) => ({ type: NUMBER, value: parseFloat(string) });
const getDateToken = (string) => ({ type: DATE, value: string.split(/[/-]/).join('') });
const getAlphabetsToken = (string) => ({ type: ALPHABETS, value: string.toLowerCase() });

const typeComparator = (type1, type2) => type1 - type2;
const numberComparator = (number1, number2) => number1 - number2;
const stringComparator = (string1, string2) => (string1 > string2 ? 1 : -1);

const compareByTokens = ({tokens: tokens1}, {tokens: tokens2}) => {
  for (let i = 0; i < tokens1.length && i < tokens2.length; ++i) {
    const token1 = tokens1[i];
    const token2 = tokens2[i];
    if (token1.type !== token2.type) {
      return typeComparator(token1.type, token2.type);
    }
    if (token1.value !== token2.value) {
      const { type } = token1;
      switch(type) {
        case NUMBER:
          return numberComparator(token1.value, token2.value);
        case DATE:
          return stringComparator(token1.value, token2.value);
        case ALPHABETS:
          return stringComparator(token1.value, token2.value);
      }
    }
  }
  return tokens1.length - tokens2.length;
};

/**
 * Parse the input string to get NUMBER and ALPHABETS type tokens
 * @param {string} string - The string to be parsed, assuming to contain no date strings
 * @return {object[]} tokens - The NUMBER and ALPHABETS type tokens
 */
const getNumberAndAlphabetsTokens = string => {
  const separators = /[ -/\.]+/g;
  return _.flatten(string.split(separators).map(s => {
    const tokens = [];
    while (!_.isEmpty(s)) {
      if (/^\d/.test(s)) { // starts with number
        const [numberString] = s.match(/^\d+/);
        tokens.push(getNumberToken(numberString));
        s = s.substring(numberString.length);
      } else {  // starts with alphabet
        const [alphabetString] = s.match(/^[a-zA-Z]+/);
        tokens.push(getAlphabetsToken(alphabetString));
        s = s.substring(alphabetString.length);
      }
    }
    return tokens;
  }));
};

/**
 * Determine whether the input string represents a valid date
 * e.g. 2003-02-29 is not a valid date because 2003 is not a leap year
 * @param {string} string - The input string
 * @return {boolean} isValid - Whether the input string is a valid date
 */
const isValidDateString = string => {
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(string) && // YYYY-mm-dd
    !/^\d{4}\/\d{2}\/\d{2}$/.test(string) // YYYY/mm/dd
  ) {
    return false;
  }
  const [yyyy, mm, dd] = string.split(/[-/]/g).map(it => parseInt(it));
  const date = new Date(Date.UTC(yyyy, mm - 1, dd));
  return (
    date.getUTCDate() === dd &&
    date.getUTCMonth() === mm - 1 &&
    date.getUTCFullYear() === yyyy
  );
};

/**
 * Get an array of indices where valid date strings' first characters appear in the input string
 * e.g. input: "ABC2016/10/10.2016/10/11"
 *     starts:     ^          ^
 * @param {string} string - The input string to search the valid date string from
 * @return {number[]} positions - An array of indices of the input string
 */
const getDateStringStartPositions = string => {
  const dateRe = /\d{4}[-/]\d{2}[-/]\d{2}/g;
  let result;
  const positions = [];
  while ((result = dateRe.exec(string)) !== null) {
    const { index } = result;
    if (isValidDateString(string.substr(index, 10))) {
      positions.push(index);
    } else {
      dateRe.lastIndex = index + 1;
    }
  }
  return positions;
};

/**
 * Parse the input string to get NUMBER, DATE, and ALPHABETS type tokens
 * @param {string} string - The string to be parsed
 * @return {object[]} tokens - The NUMBER, DATE and ALPHABETS type tokens
 */
const getBasicTypeTokens = string => {
  // first search for all the valid date strings
  // create a date tokens from each of the date strings.
  // And for other parts(substrings) of the input string that don't contain valid date strings,
  // parse each to get number and alphabets tokens
  const dateStringStarts = getDateStringStartPositions(string);
  let lastEnd = 0;
  const tokens = [];
  for (let currentStart of dateStringStarts) {
    if (lastEnd < currentStart) {
      tokens.push(...getNumberAndAlphabetsTokens(string.substring(lastEnd, currentStart)));
    }
    const currentEnd = currentStart + 10; // 'YYYY?mm?dd'.length = 10;
    const dateString = string.substring(currentStart, currentEnd);
    tokens.push(getDateToken(dateString));
    lastEnd = currentEnd;
  }
  if (lastEnd < string.length) {
    tokens.push(...getNumberAndAlphabetsTokens(string.substring(lastEnd)));
  }
  return tokens;
};


const isSingleFloatString = string => /^-?(\d*\.)?\d+$/.test(string);

const tokenize = string => {
  if (isSingleFloatString(_.trim(string))) {
    return [getNumberToken(string)];
  }
  return getBasicTypeTokens(string);
};

function sortStrings(strings){
  const tokenLists = strings.map(string =>({
    tokens: tokenize(string),
    string
  }));
  // console.log(_.map(tokenLists, 'tokens'));
  return _.map(tokenLists.sort(compareByTokens), 'string');
}
export default sortStrings;
/*
const testCases = [
  {
    input: ['2', '.2', '-1', '-2.4'],
    expected: ['-2.4', '-1', '.2', '2'],
  },
  {
    input: ["2016/10/10", "2017-01-01", "2016-10-12"],
    expected: ["2016/10/10", "2016-10-12", "2017-01-01"],
  },
  {
    input: ["Watermelon", "Apple", "bacon"],
    expected: ["Apple", "bacon", "Watermelon"],
  },
  {
    input: ["abc123", "def45", "abc45"],
    expected: ["abc45", "abc123", "def45"],
  },
  {
    input: ["Ended on 2016-01-02", "started on 2016-01-02", "ended ON 2017-02-05", "ended on 2017-01-05"],
    expected: ["Ended on 2016-01-02", "ended on 2017-01-05", "ended ON 2017-02-05", "started on 2016-01-02"],
  },
  {
    input: ["a1", "a2016-01-01", "a3"],
    expected: ["a1", "a3", "a2016-01-01"],
  },
  {
    input: ["2016/10/10 2016/10/10", "2016/10/10 2017-01-01", "2016-10-12 2016/10/10"],
    expected: ["2016/10/10 2016/10/10", "2016/10/10 2017-01-01",  "2016-10-12 2016/10/10",],
  },
  {
    input: ["A Watermelon", "AW Apple", "A Watermelon"],
    expected: ["A Watermelon", "A Watermelon", "AW Apple"],
  },
  {
    input: [
      "aw7v4h2",
      "1j4b2h5",
      "8w7v4h2",
      "1J4b10h5",
      "1j4b27h5",
      "8w7v5h2",
      "2i79r6qr1",
      "2i79r6qA1",
      "8w7v56h2",
      "8x7000v5h2",
      "8W2017v4h2",
      "8X2017v4h2",
      "8x2017-01-09-v4h2",
      "8x1000v5h2",
      "8x2017-03-09-v4h2",
      "8x2017-03-99-v4h2",
      "a7v4h2",
    ],
    expected: [
      "1j4b2h5",
      "1J4b10h5",
      "1j4b27h5",
      "2i79r6qA1",
      "2i79r6qr1",
      "8w7v4h2",
      "8w7v5h2",
      "8w7v56h2",
      "8W2017v4h2",
      "8x1000v5h2",
      "8x2017-03-99-v4h2",
      "8X2017v4h2",
      "8x7000v5h2",
      "8x2017-01-09-v4h2",
      "8x2017-03-09-v4h2",
      "a7v4h2",
      "aw7v4h2",
    ],
  },
];

const runTest = ({input, expected}) => {
  const actual = sortStrings(input);
  if (!_.isEqual(actual, expected)) {
    console.error(`test failed [${input}] expect [${actual}] to equal [${expected}]`);
    return false;
  }
  return true;
};

if (_.every(testCases, runTest)) {
  console.log(`All ${testCases.length} test(s) passed`);
} else {
  console.error("Some test(s) failed");
}

*/
