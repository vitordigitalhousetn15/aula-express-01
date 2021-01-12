const express = require('express')
const products = require('./products.json')

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/products', (req, res) => {
    res.json({
        data: products
    })
})

app.get('/products/:id', (req, res) => {
    const productId = req.params.id

    const product = products.find(product => product.id === parseInt(productId))

    if(product) {
        res.json({
            data: product
        })
    } else {
        res.sendStatus(404)
    }
})

app.listen(PORT, () => {
    console.log('escutando na porta ' + PORT)
})