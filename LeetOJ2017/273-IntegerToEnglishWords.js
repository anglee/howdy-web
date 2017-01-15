const trim = (s) => (
  s[s.length - 1] === ' ' ? s.substr(0, s.length - 1) : s
);

var numberToWordsI = function(num) {
  if (num === 0) {
    return '';
  }
  if (num === 1) {
    return 'One';
  }
  if (num === 2) {
    return 'Two';
  }
  if (num === 3) {
    return 'Three';
  }
  if (num === 4) {
    return 'Four';
  }
  if (num === 5) {
    return 'Five';
  }
  if (num === 6) {
    return 'Six';
  }
  if (num === 7) {
    return 'Seven';
  }
  if (num === 8) {
    return 'Eight';
  }
  if (num === 9) {
    return 'Nine';
  }
  if (num === 10) {
    return 'Ten';
  }
  if (num === 11) {
    return 'Eleven';
  }
  if (num === 12) {
    return 'Twelve';
  }
  if (num === 13) {
    return 'Thirteen';
  }
  if (num === 14) {
    return 'Fourteen';
  }
  if (num === 15) {
    return 'Fifteen';
  }
  if (num === 16) {
    return 'Sixteen';
  }
  if (num === 17) {
    return 'Seventeen';
  }
  if (num === 18) {
    return 'Eighteen';
  }
  if (num === 19) {
    return 'Nineteen';
  }
  if (num >= 20 && num <= 29) {
    return trim(`Twenty ${numberToWordsI(num % 10)}`);
  }
  if (num >= 30 && num <= 39) {
    return trim(`Thirty ${numberToWordsI(num % 10)}`);
  }
  if (num >= 40 && num <= 49) {
    return trim(`Forty ${numberToWordsI(num % 10)}`);
  }
  if (num >= 50 && num <= 59) {
    return trim(`Fifty ${numberToWordsI(num % 10)}`);
  }
  if (num >= 60 && num <= 69) {
    return trim(`Sixty ${numberToWordsI(num % 10)}`);
  }
  if (num >= 70 && num <= 79) {
    return trim(`Seventy ${numberToWordsI(num % 10)}`);
  }
  if (num >= 80 && num <= 89) {
    return trim(`Eighty ${numberToWordsI(num % 10)}`);
  }
  if (num >= 90 && num <= 99) {
    return trim(`Ninety ${numberToWordsI(num % 10)}`);
  }


  if (num < 1000) {
    const hundreds = numberToWordsI(Math.floor(num / 100));
    return trim(`${hundreds} Hundred ${numberToWordsI(num % 100)}`);
  }

  if (num < 1000 * 1000) {
    const thousands = Math.floor(num / 1000);
    return trim(
      `${numberToWordsI(thousands)} Thousand ${numberToWordsI(num % 1000)}`
    );
  }

  if (num < 1000 * 1000 * 1000) {
    const millions = Math.floor(num / (1000 * 1000));
    return trim(
      `${numberToWordsI(millions)} Million ${numberToWordsI(num % (1000 * 1000))}`
    );
  }

  if (num < 1000 * 1000 * 1000 * 1000) {
    const billions = Math.floor(num / (1000 * 1000 * 1000));
    return trim(
      `${numberToWordsI(billions)} Billion ${numberToWordsI(num % (1000 * 1000 * 1000))}`
    );
  }
};

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num === 0) {
    return 'Zero';
  }

  return numberToWordsI(num);
};

export default numberToWords;
