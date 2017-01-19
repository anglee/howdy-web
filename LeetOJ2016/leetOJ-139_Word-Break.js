/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
  // var wordBreak = function(s, wordDict) {
//     if (s.length === 0) {
//         return true;
//     }
//     for (var i = s.length; i >= 1; i--) {
//         if (wordDict.has(s.substring(0, i))
//         && wordBreak(s.substring(i), wordDict)) {
//             return true;
//         }
//     }
//     return false;
// };



// Dynamic Programming

// isWordBreak[i] = // if s.substr(i) is word breakable
//    substr(i, 1) is a word && isWordBreak[i + 1]
//    substr(i, 2) is a word && isWordBreak[i + 2]
//    substr(i, 3) is a word && isWordBreak[i + 3]
//    ...
//    substr(i, s.length - i) is a word && isWordBreak(i + 3)

var wordBreak = function(s, wordDict) {
    var isWordBreak = [];
    for (var t = 0; t < s.length; t++) {
      isWordBreak.push(false);
    }
    isWordBreak.push(true); // isWordBreak[s.length] = true;

    for (var i = s.length - 1; i >=0; i--) {
      for (var len = 1; len <= s.length - i; len++) {
        if (wordDict.has(s.substr(i, len)) && isWordBreak[i + len]) {
          isWordBreak[i] = true;
          break;
        }
      }
    }
    return isWordBreak[0];
  };

export default wordBreak;
