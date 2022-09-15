const express = require('express')
const ContProduct = require('../controller/contProduct')
const router = express.Router()


router.get('/add', ContProduct.addProduct)
router.post('/add', ContProduct.handlerAddProduct)
router.get('/:id/delete', ContProduct.deleteProduct)


module.exports = router