
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
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

export default addBinary;