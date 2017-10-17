const outputRead = (bits) => {
  const hour = parseInt(bits.slice(0, 4), 2);
  if (hour >= 12) {
    return null;
  }
  const minute = parseInt(bits.slice(4), 2);
  if (minute > 59) {
    return null;
  }
  return `${hour}:${minute < 10 ? '0' + minute : minute}`
};

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  const countOfLED = 10;
  const ret = [];

  const doRead = (prefix, countOf1Left) => {
    const spaceLeft = countOfLED - prefix.length;
    if (countOf1Left > spaceLeft) {
      return false;
    }
    if (prefix.length === countOfLED) {
      if (countOf1Left === 0) {
        const read = outputRead(prefix);
        if (read !== null) {
          ret.push(read);
        }
      }
      return;
    }
    if (countOf1Left > 0) {
      doRead(`${prefix}1`, countOf1Left - 1);
    }
    doRead(`${prefix}0`, countOf1Left);
  };

  doRead('', num);
  return ret;
};

export default readBinaryWatch;