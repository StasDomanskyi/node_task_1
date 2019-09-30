let argv = require('minimist')(process.argv.slice(2));
let fs = require('fs');
let encode = require('./encode');
let decode = require('./decode');

let mode = argv._[0];
let shift = +argv._[1];
let inputPath = "./" + argv._[2];
let outputPath = "./" + argv._[3];



fs.readFile(inputPath, function(err, data) {
  if(err) {
    console.error(err);
  } else {
    let inputedData = data.toString();
    let outputedData;

    if (mode === 'encode') {
      outputedData = encode(shift, inputedData);      
      fs.writeFileSync(outputPath, outputedData);  
    }

    if (mode === 'decode') {
      outputedData = decode(shift, inputedData);
      fs.writeFileSync(outputPath, outputedData);
    }    
  }
});