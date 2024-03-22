const fs=require('fs');
// const { encode } = require('querystring');

console.log(`starting`);
try {
    //these are async operations so order is not fixedhere
    fs.writeFile('data.txt','khela oh jaye',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("data added");
    });
    fs.appendFile('data.txt',' nahi hoga jaye',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("data appended");
    });
    const buffer=fs.readFile('data.txt',(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log(data.toString());
    });
    console.log(buffer);
} catch (error) {
    console.log(error)
}
fs.unlink('ejs.txt',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('file deleted');
});


console.log(`proved non blocking code`);