const fs=require('fs');
// const { encode } = require('querystring');

console.log(`starting`);
try {
    fs.writeFileSync('data.txt','khela oh jaye');
    fs.appendFileSync('data.txt',' nahi hoga jaye');
    const buffer=fs.readFileSync('data.txt',{encoding:'utf8'});
    console.log(buffer);
} catch (error) {
    console.log(error)
}
fs.unlinkSync('ej.txt');


console.log(`checking fs is blocking code`);