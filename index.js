const express = require('express')

const productsRoute = require('./routes/products')

const PORT = 3000
const app = express()

const router = express.Router()

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.use('/products', productsRoute)

app.listen(PORT, () => {
    console.log('escutando na porta ' + PORT)
})