const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Product List</h1>');
    res.write('<p>Book </p>');

    res.end();
})

server.listen(8000)