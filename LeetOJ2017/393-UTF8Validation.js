const toByteBinary = (d) => {
  const binary = d.toString(2);
  if (binary.length === 8) {
    return binary;
  } else {
    return Array(8 - binary.length).fill('0').join('') + binary;
  }
};

/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {

  let neededByte = 0;
  for (let d of data) {
    const binary = toByteBinary(d);
    // console.log(binary);
    if (neededByte > 0) {
      if (binary[0] !== '1' || binary[1] !== '0') {
        return false;
      }
      neededByte--;
    } else {
      if (binary[0] === '0') {
        neededByte = 0;
      } else {
        if (binary[1] !== '1') {
          return false;
        }
        for (let i = 1; i < 4 && binary[i] === '1'; ++i) {
          if (i === 3 && binary[4] === '1') {
            return false;
          }
          neededByte = i;
        }
      }
    }
  }
  return neededByte === 0;
};

export default validUtf8;