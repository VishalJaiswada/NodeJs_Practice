const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, Vishal Jaiswada! </h1> <p>you are learning Nodejs</p>');
});


server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});