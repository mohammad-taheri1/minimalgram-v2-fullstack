const http = require('http');
const { clearScreenDown } = require('readline');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Product List</h1>');
    res.write('<p>Book </p>');

    res.end();
})

server.listen(8000)