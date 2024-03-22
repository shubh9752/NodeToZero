// events in node js 

const http=require('http');

const server=http.createServer((req,res)=>{
    //checking method
    if(req.method=="POST"){
        //expecting data from client
        let body="";
        req.on('data',(chunk)=>{
              body += chunk.toString();
        });
        //waiting for full stream to finish
        req.on('end',()=>{
            console.log(body);
            res.end('data recieved');
        });
       
    }else{
        console.log(`function ends here`);
        res.end('welcome to shubham server');
    }
   
})

server.listen(8080,()=>{
    console.log('server is running on port 8080');
})

//https://go.postman.co/workspace/71cd8bbe-d360-4d41-8e6d-671ee090a8fc/documentation/33658677-ee6b4622-313e-4584-9b74-882c9a9cd84c?entity=request-205f8e07-5a52-4479-baf9-fcc1b565fde7