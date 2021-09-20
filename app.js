const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Product Title: ', (product) => {
    fs.writeFileSync('products.txt', product);

    rl.close();
})