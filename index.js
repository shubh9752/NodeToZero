const fs=require('fs');
// const { encode } = require('querystring');

console.log(`starting`);
const buffer=fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(buffer);
console.log(`checking fs is blocking code`);