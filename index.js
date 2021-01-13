const express = require('express')
const products = require('./products.json')

const PORT = 3000

const app = express()

// req = request ou requisição
// res = response ou resposta
app.get('/', function(req, res) {
    res.send('hello world')
})
// metodo: get, post, put, delete, patch
app.get('/products', function(req, res) {
    // http://localhost:3000/products?type=TV
    const type = req.query.type
    if(type === undefined) {
        res.json({
            data: products
        })
    } else {
        const data = products.filter(function(product) {
            return product.type === type
        })
        res.json({
            data: data
        })
    }
})

app.listen(PORT, function() {
    console.log("rodando servidor")
})
