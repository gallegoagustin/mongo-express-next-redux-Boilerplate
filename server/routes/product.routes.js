const express = require('express');
const router = express.Router();
const {
    pruebaProducts
} = require('../controllers/product.controllers')

router.get('/product', pruebaProducts)

module.exports = router;