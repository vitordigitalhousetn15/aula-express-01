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

app.listen(PORT, () => {
    console.log('escutando na porta ' + PORT)
})