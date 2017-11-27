const read = (digits) => {
  let ret = [];
  if (digits.length === 3) {
    if (digits[2] === '9') {
      ret.push('Nine');
      ret.push('Hundred');
    } else if (digits[2] === '8') {
      ret.push('Eight');
      ret.push('Hundred');
    } else if (digits[2] === '7') {
      ret.push('Seven');
      ret.push('Hundred');
    } else if (digits[2] === '6') {
      ret.push('Six');
      ret.push('Hundred');
    } else if (digits[2] === '5') {
      ret.push('Five');
      ret.push('Hundred');
    } else if (digits[2] === '4') {
      ret.push('Four');
      ret.push('Hundred');
    } else if (digits[2] === '3') {
      ret.push('Three');
      ret.push('Hundred');
    } else if (digits[2] === '2') {
      ret.push('Two');
      ret.push('Hundred');
    } else if (digits[2] === '1') {
      ret.push('One');
      ret.push('Hundred');
    }
  }
  if (digits.length >= 2) {
    if (digits[1] === '9') {
      ret.push('Ninety');
    } else if (digits[1] === '8') {
      ret.push('Eighty');
    } else if (digits[1] === '7') {
      ret.push('Seventy');
    } else if (digits[1] === '6') {
      ret.push('Sixty');
    } else if (digits[1] === '5') {
      ret.push('Fifty');
    } else if (digits[1] === '4') {
      ret.push('Forty');
    } else if (digits[1] === '3') {
      ret.push('Thirty');
    } else if (digits[1] === '2') {
      ret.push('Twenty');
    } else if (digits[1] === '1') {
      if (digits[0] === '9') {
        ret.push('Nineteen');
      } else if (digits[0] === '8') {
        ret.push('Eighteen');
      } else if (digits[0] === '7') {
        ret.push('Seventeen');
      } else if (digits[0] === '6') {
        ret.push('Sixteen');
      } else if (digits[0] === '5') {
        ret.push('Fifteen');
      } else if (digits[0] === '4') {
        ret.push('Fourteen');
      } else if (digits[0] === '3') {
        ret.push('Thirteen');
      } else if (digits[0] === '2') {
        ret.push('Twelve');
      } else if (digits[0] === '1') {
        ret.push('Eleven');
      } else if (digits[0] === '0') {
        ret.push('Ten');
      }
    }
  }
  if (digits.length >= 1) {
    if (digits.length === 0 || digits[1] !== '1') {
      if (digits[0] === '9') {
        ret.push('Nine');
      } else if (digits[0] === '8') {
        ret.push('Eight');
      } else if (digits[0] === '7') {
        ret.push('Seven');
      } else if (digits[0] === '6') {
        ret.push('Six');
      } else if (digits[0] === '5') {
        ret.push('Five');
      } else if (digits[0] === '4') {
        ret.push('Four');
      } else if (digits[0] === '3') {
        ret.push('Three');
      } else if (digits[0] === '2') {
        ret.push('Two');
      } else if (digits[0] === '1') {
        ret.push('One');
      }
    }
  }
  return ret.join(' ');
};

const getGroupName = (groupNumber) => {
  switch (groupNumber) {
    case 0: return '';
    case 1: return 'Thousand';
    case 2: return 'Million';
    case 3: return 'Billion';
  }
  return '';
};

const isZero = (group) => {
  for (let m of group) {
    if (m !== '0') {
      return false;
    }
  }
  return true;
};
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num === 0) {
    return 'Zero';
  }
  const str = `${num}`;
  const ret = [];
  let group = [];
  let groupNumber = 0;
  for (let i = str.length - 1; i >= 0; --i) {
    group.push(str[i]);
    if (group.length === 3) {
      if (!isZero(group)) {
        ret.push(getGroupName(groupNumber));
        ret.push(read(group));
      }
      group = [];
      groupNumber++;
    }
  }
  if (group.length > 0) {
    ret.push(getGroupName(groupNumber));
    ret.push(read(group));
  }
  return ret.filter(it => it.length > 0).reverse().join(' ');
};

export default numberToWords;
