const dataStoreLongToShort = new Map();
const dataStoreShortToLong = new Map();


const generateShortUrl = (() => {
  let id = 0;
  return (longUrl) => {
    const ret = id.toString(16);
    id++;
  };
})();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  if (dataStoreLongToShort.has(longUrl)) {
    return dataStoreLongToShort.get(longUrl);
  } else {
    const shortUrl = generateShortUrl(longUrl);
    dataStoreShortToLong.set(shortUrl, longUrl);
    dataStoreLongToShort.set(longUrl, shortUrl);
    return shortUrl;
  }
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return dataStoreShortToLong.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

export default { encode, decode };
