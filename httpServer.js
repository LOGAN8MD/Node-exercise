import http from 'http';
import fs from 'fs';

const message='Pass this message to everyone';

const port = process.env.PORT || 7000;

const server = http.createServer((req, res)=>{

    
    res.setHeader('Content-type','text/html')

    if(req.url =='/'){
        res.statusCode = 200;
        res.end(`<h1>${message}</h1>`)
    }
    else if(req.url =='/about'){
        res.statusCode = 200;
        res.end("<h1>This is about point</h1>")
    }
   else if(req.url=='/hello'){
    res.statusCode = 200;
    const data=fs.readFileSync('index.html');
        res.end(data.toString());
    }


})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});