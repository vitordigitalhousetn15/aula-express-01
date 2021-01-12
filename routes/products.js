const express = require('express')
const products = require('../products.json')

const router = express.Router()


router.get('/', (req, res) => {
    const type = req.query.type

    if (!type) {
        res.json({
            data: products
        })
    } else {
        const data = products.filter(product => {
            return product.type === type
        })

        res.json({
            data: data
        })
    }
})

router.get('/:id', (req, res) => {
    const productId = req.params.id

    const product = products.find(product => product.id === parseInt(productId))

    if (product) {
        res.json({
            data: product
        })
    } else {
        res.sendStatus(404)
    }
})


module.exports = router