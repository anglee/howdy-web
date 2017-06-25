/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary0 = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  let output = '';

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    sum += i >= 0 ? parseInt(a[i]) : 0;
    sum += j >= 0 ? parseInt(b[j]) : 0;

    output += sum % 2;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return output.split('').reverse().join('');
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let ai = a.length - 1;
  let bi = b.length - 1;
  let co = 0;

  const buffer = [];
  while (ai >= 0 || bi >= 0 || co > 0) {
    const va = ai >= 0 && a[ai] === '1' ? 1 : 0;
    const vb = bi >= 0 && b[bi] === '1' ? 1 : 0;
    const sum = va + vb + co;
    buffer.push(sum & 1);
    co = sum > 1 ? 1 : 0;
    ai--;
    bi--;
  }
  return buffer.reverse().join('');
};

export default addBinary;