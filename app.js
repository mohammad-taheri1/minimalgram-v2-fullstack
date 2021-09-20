const http = require('http');
const { clearScreenDown } = require('readline');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')

    const url = req.url

    if(url === '/'){
        const form = `<form method="POST" action="/products">
                        <input type="text" name="product" />
                        <button type="submit">Add Product</button>
                       </form>`

        res.write(form)
        return res.end()
    }

    const title = '<h2>Shop Page</h2>'
    res.write(title);


    res.end();
})

server.listen(8000)