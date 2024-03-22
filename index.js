const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url);
    let url = req.url;
    if(url==='/'){
        res.write('<h1>you are on homepage</h1>');
        res.end('home page end');
    }else if(url==='/product'){
        res.write('<h1>you are on product page</h1>');
        res.end('product page end');
    }
    
    res.end('server is shubham server');
});
server.listen(8080,()=>{
    console.log('server running on 8080');
});
