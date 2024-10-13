const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    res.statusCode = 200;
    
    if(req.url =='/'){
        res.end('<h1>Hello, Vishal Jaiswada! </h1> <p>you are learning Nodejs</p>');
    }
    else if(req.url == '/About'){
        res.end('<h1>About Vishal Jaiswada! </h1> <p>He is a software engineer and currently learning Nodejs</p>');
    }
    else if(req.url == '/vishal'){
      const data = fs.readFileSync('index.html');
      res.end(data.toString());
    }
    else{
        //res.vishal(); --> to crash the server
        res.statusCode = 404 ;
        res.end('<h1>Page Not Found!</h1>');
    }
});


server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});