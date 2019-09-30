const alphabet = require('./alphabet');

function encode(shift, data) {
  let inputedData = data;
  let dataArr = inputedData.split('');

  let newArr = dataArr.map(item => {
    if (item === '\n') {
      return '\n';
    }

    if (item === ' ') {
      return ' ';
    }
    
    let letterNumber = alphabet.indexOf(item);
    if (letterNumber === -1) {
      return '';
    }

    let shiftCipher = letterNumber + shift;

    if (shiftCipher < 26) {
      return alphabet[shiftCipher];
    } else {
      return alphabet[shiftCipher - 26];
    }
  });
  let endData = newArr.join('').toString();
  console.log(endData);
  return endData;
}

module.exports = encode;