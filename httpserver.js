const http = require ('http');
const fs =  require('fs');
const port = process.env.PORT || 3000; //node js process alotting port

const server = http.createServer((req,res)=>{
    //console.log(typeof req)
    // console.log(Object.getOwnPropertyNames(req))
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    if (req.url == '/'){
    res.end('<h1>Hello World I am Node js Server</h1>')
    }
    else if (req.url == '/about'){
        res.end("<h1>this is the about page</h1>")
    }
    else if (req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }
    else{
        res.statusCode = 404
        res.end("<h1>Not found any page for this URL</h1>")
    }
})

server.listen(port,()=>{
console.log(`server is listening on port ${port}`);
})
