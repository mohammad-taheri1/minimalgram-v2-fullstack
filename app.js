const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')

    const url = req.url
    const method = req.method

    if(url === '/'){
        const form = `<form method="POST" action="/products">
                        <input type="text" name="product" />
                        <button type="submit">Add Product</button>
                       </form>`

        res.write(form)
        return res.end()
    }
    if(url === '/products' && method === 'POST') {
        fs.writeFileSync('products.text', 'Product Name')
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    }

    const title = '<h2>Shop Page</h2>'
    res.write(title);


    res.end();
})

server.listen(8000)