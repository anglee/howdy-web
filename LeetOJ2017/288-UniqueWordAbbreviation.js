const generateAbbr = word => `${word[0]}${word.length > 2 ? word.length - 2 : ''}${word[word.length - 1]}`;
/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
  const abbrsMap = new Map();
  dictionary.forEach(word => {
    const abbr = generateAbbr(word);
    if (!abbrsMap.has(abbr)) {
      abbrsMap.set(abbr, new Set());
    }
    abbrsMap.get(abbr).add(word);
  });
  this.abbrsMap = abbrsMap;
};

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
  const abbr = generateAbbr(word);
  return !this.abbrsMap.has(abbr) || (
    this.abbrsMap.get(abbr).size === 1 && this.abbrsMap.get(abbr).has(word)
  );
};

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = Object.create(ValidWordAbbr).createNew(dictionary)
 * var param_1 = obj.isUnique(word)
 */

export default ValidWordAbbr;