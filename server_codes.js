const http = require('http');

const server = http.createServer((req,resp)=>{
    resp.end("Hello Guys.......\nI'm from server now");
    resp.end(req)
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Im listening from oort 8000');
})