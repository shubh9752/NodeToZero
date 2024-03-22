const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('server is shubham server');
});
server.listen(8080,()=>{
    console.log('server running on 8080');
});
