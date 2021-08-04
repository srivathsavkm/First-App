const fs = require('fs');

// Sync Method
const files = fs.readdirSync('./');
console.log(files);

// Async Method
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
})